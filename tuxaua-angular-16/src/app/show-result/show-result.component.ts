import { Component, OnInit, Injectable } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})

export class ShowResultComponent{
  imagemSelecionada: string = "";
  linkImagem: string = ""; // Adiciona uma variável para armazenar o link da imagem

  constructor() { }
 

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.limparImagemSelecionada();
        this.imagemSelecionada = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitIMG() {
    // Verifica se o link da imagem foi inserido
    if (this.linkImagem) {
      this.limparImagemSelecionada();
      this.imagemSelecionada = this.linkImagem;
    }
  }

  limparImagemSelecionada() {
    this.imagemSelecionada = "";
  }

}
