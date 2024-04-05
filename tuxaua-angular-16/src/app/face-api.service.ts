import { EventEmitter, Injectable } from '@angular/core';
import * as faceapi from 'face-api.js'

@Injectable({
  providedIn: 'root'
})
export class FaceApiService {
  public globalFace: any;

  private modelsForLoad = [
    faceapi.nets.ssdMobilenetv1.loadFromUri('assets/modelos'),
    faceapi.nets.faceLandmark68Net.loadFromUri('assets/modelos'),
    faceapi.nets.faceRecognitionNet.loadFromUri('assets/modelos'),
    faceapi.nets.faceExpressionNet.loadFromUri('assets/modelos'),
];


  cbModels: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
    this.globalFace = faceapi;
    this.LoadModels();
  }

  public LoadModels = () => {
    Promise.all(this.modelsForLoad).then(res => {
      console.log('Modelos carregados!');
      this.cbModels.emit(true);
    })
  }
}
