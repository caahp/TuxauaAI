import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit{
  @ViewChild('videoElement') videoElement!: ElementRef;
  @Input() stream!: any;
  @Input() width!: number;
  @Input() height!: number;

  constructor(private renderer2: Renderer2, private elementRef:ElementRef){}

  ngOnInit(): void {
  }

  loadedMetaData(): void {
    console.log('Metadata loaded');
    this.videoElement.nativeElement.play();
}


  listenerPlay(): void{

  }

}

