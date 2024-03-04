import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-div-analise-imagens',
  templateUrl: './div-analise-imagens.component.html',
  styleUrl: './div-analise-imagens.component.css'
})
export class DivAnaliseImagensComponent {
  form: FormGroup;
  response: any;
  imagemSelecionada: string = "";
  linkImagem: string = ""; // Adiciona uma variável para armazenar o link da imagem

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      imageFile: [null],
      imageLink: ['']
    });
  }

  submitForm() {
    const imageLinkControl = this.form.get('imageLink');

    if (imageLinkControl) {
      const imageUrl = imageLinkControl.value;

      if (imageUrl) {
        const requestBody = { imageUrl };

        this.http.post('http://localhost:3000/google/text', requestBody)
          .subscribe(response => {
            this.response = response;
            console.log(response);
          });
      }
    }
  }
  stringifyResponse(response: any): string {
    return JSON.stringify(response);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.limparImagemSelecionada();
        this.imagemSelecionada = e.target.result;
        this.form.get('imageLink')?.setValue(this.imagemSelecionada); // Atualiza o valor do campo imageLink no formulário
      };
      reader.readAsDataURL(file);
    }
  }

  submitIMG() {
    // Verifica se o link da imagem foi inserido
    if (this.linkImagem) {
      this.limparImagemSelecionada();
      this.imagemSelecionada = this.linkImagem;
      this.form.get('imageLink')?.setValue(this.imagemSelecionada); // Atualiza o valor do campo imageLink no formulário
    }
  }

  limparImagemSelecionada() {
    this.imagemSelecionada = "";
  }
  
  submitAnalise() {
    this.submitIMG(); // Chamando a primeira função
    this.submitForm(); // Chamando a segunda função
}

}
