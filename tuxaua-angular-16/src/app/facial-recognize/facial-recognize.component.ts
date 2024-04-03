import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-facial-recognize',
  templateUrl: './facial-recognize.component.html',
  styleUrl: './facial-recognize.component.css'
})
export class FacialRecognizeComponent implements OnInit{
  public currentStream: any;
  public dimensionVideo: any;
  constructor(private router: Router) {}

  // Funções de redirecionamento
  // Tambem ficam no app-routing-modules.ts
  navigateToOther() {
    this.router.navigate(['/facial']);
  }
  ngOnInit(): void {
    this.checkMediaSource();
    this.getSizeCam();
  }

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
}

}

