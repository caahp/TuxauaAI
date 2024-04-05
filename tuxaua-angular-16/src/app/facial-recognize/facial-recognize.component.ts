import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { FaceApiService } from '../face-api.service';
import { VideoPlayerService } from '../video-player.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';


@Component({
  selector: 'app-facial-recognize',
  templateUrl: './facial-recognize.component.html',
  styleUrl: './facial-recognize.component.css'
})

export class FacialRecognizeComponent implements OnInit, OnDestroy{

  public currentStream: any;
  public dimensionVideo: any;
  listEvents: Array<any> = [];
  overCanvas: any;
  listExpressions: any = [];

  constructor(
    private router: Router,
    private faceApiService: FaceApiService,
    private videoPlayerService: VideoPlayerService,
    private renderer2: Renderer2,
    private elementRef: ElementRef) {}

   
  // Funções de redirecionamento
  // Tambem ficam no app-routing-modules.ts
  navigateToOther() {
    this.router.navigate(['/facial']);
  }

  ngOnInit(): void {
    this.listenerEvents();
    this.checkMediaSource();
    this.getSizeCam();
  }

  ngOnDestroy(): void {
    this.listEvents.forEach(event => event.unsubscribe());
  }

  listenerEvents = () => {

    const observer1$ = this.videoPlayerService.cbAi
    .subscribe(({resizedDetections, displaySize, expressions, videoElement})=>{
      resizedDetections = resizedDetections[0] || null;
      if (resizedDetections) {
        this.listExpressions = _.map(expressions, (value, name) => {
          return {name, value};
        });
       
        this.createCanvasPreview(videoElement);
        this.drawFace(resizedDetections, displaySize);
      }
    });

    this.listEvents = [observer1$]
  };

  drawFace = (resizedDetections: any, displaySize: any) => {
    if(this.overCanvas){
      const {globalFace} = this.faceApiService;
      this.overCanvas.getContext('2d').clearRect(0, 0, displaySize.width, displaySize.height);
      globalFace.draw.drawFaceLandmarks(this.overCanvas, resizedDetections);

    }
  };

  checkMediaSource = () => {
    if (navigator && navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then(stream => {
            this.currentStream = stream;
        }).catch(() => {
            console.log('**** ERROR NOT PERMISSIONS ****');
        });
    } else {
        console.log('******* ERROR NOT FOUND MEDIA DEVICES');
    }
}

getSizeCam = () => {
  const elementCam: HTMLElement | null = document.querySelector('.cam');
  if (elementCam !== null) {
    const { width, height } = elementCam.getBoundingClientRect();
    console.log(width, height);
    this.dimensionVideo = {width, height};
  } else {
    console.error("Elemento com a classe 'cam' não encontrado.");
  }
};

createCanvasPreview = (videoElement: any) => {
  if (!this.overCanvas) {
    const {globalFace} = this.faceApiService;
    this.overCanvas = globalFace.createCanvasFromMedia(videoElement.nativeElement);
    this.renderer2.setProperty(this.overCanvas, 'id', 'new-canvas-preview');
    const elementPreview = document.querySelector('.canvas-preview');
    this.renderer2.appendChild(elementPreview, this.overCanvas);
  }
};

}

