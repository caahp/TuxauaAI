import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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

  constructor(){}

  ngOnInit(): void {
  }

  loadedMetadata(): void{

  }

  listenerPlay(): void{

  }

}

