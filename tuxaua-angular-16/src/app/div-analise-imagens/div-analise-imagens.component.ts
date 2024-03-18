import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-div-analise-imagens',
  templateUrl: './div-analise-imagens.component.html',
  styleUrls: ['./div-analise-imagens.component.css'],
})
export class DivAnaliseImagensComponent {
  form: FormGroup;
  response: any;
  imagemSelecionada: string = '';
  linkImagem: string = '';
  isSubmitCharClicked: boolean = false;
  isSubmitLogoClicked: boolean = false;
  isSubmitLabelClicked: boolean = false;
  isSubmitCorClicked: boolean = false;
  isSubmitDescricaoClicked: boolean = false;
  isSubmitFacesClicked: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      imageFile: [null],
      imageLink: [''],
    });
  }

  submitChar() {
    this.response = null; // Limpa a resposta temporária
    this.isSubmitCorClicked = false; // Reinicia a flag de clique do submit de cor
    this.isSubmitLogoClicked = false;
    this.isSubmitLabelClicked = false;
    this.isSubmitDescricaoClicked = false;
    this.isSubmitFacesClicked = false;

    const imageLinkControl = this.form.get('imageLink');
    const imageUrl = imageLinkControl?.value;

    if (imageUrl) {
      const requestBody = { imageUrl };

      this.http
        .post('http://localhost:3000/google/text', requestBody)
        .subscribe(
          (response) => {
            this.response = response;
            this.isSubmitCharClicked = true;
            console.log('Backend Response:', response);
          },
          (error) => {
            console.error('Backend Error:', error);
          }
        );
    }
  }

  submitLogo() {
    this.response = null; // Limpa a resposta temporária
    this.isSubmitCorClicked = false; // Reinicia a flag de clique do submit de cor
    this.isSubmitLabelClicked = false;
    this.isSubmitDescricaoClicked = false;
    this.isSubmitFacesClicked = false;
    this.isSubmitCharClicked = false;

    const imageLinkControl = this.form.get('imageLink');

    if (imageLinkControl) {
      const imageUrl = imageLinkControl.value;

      if (imageUrl) {
        const requestBody = { imageUrl };

        this.http
          .post('http://localhost:3000/google/logos', requestBody)
          .subscribe(
            (response) => {
              this.response = response;
              this.isSubmitLogoClicked = true;
              console.log('Backend Response:', response);
            },
            (error) => {
              console.error('Backend Error:', error);
            }
          );
      }
    }
  }

  submitLabels() {
    this.response = null; // Limpa a resposta temporária
    this.isSubmitCorClicked = false; // Reinicia a flag de clique do submit de cor
    this.isSubmitLogoClicked = false;
    this.isSubmitDescricaoClicked = false;
    this.isSubmitFacesClicked = false;
    this.isSubmitCharClicked = false;

    const imageLinkControl = this.form.get('imageLink');

    if (imageLinkControl) {
      const imageUrl = imageLinkControl.value;

      if (imageUrl) {
        const requestBody = { imageUrl };

        this.http
          .post('http://localhost:3000/google/labels', requestBody)
          .subscribe(
            (response) => {
              this.response = response;
              this.isSubmitLabelClicked = true;
              console.log('Backend Response:', response);
            },
            (error) => {
              console.error('Backend Error:', error);
            }
          );
      }
    }
  }

  submitCor() {
    this.response = null; // Limpa a resposta temporária
    this.isSubmitCharClicked = false; // Reinicia a flag de clique do submit de texto
    this.isSubmitLabelClicked = false;
    this.isSubmitLogoClicked = false;
    this.isSubmitDescricaoClicked = false;
    this.isSubmitFacesClicked = false;

    const imageLinkControl = this.form.get('imageLink');
    const imageUrl = imageLinkControl?.value;

    if (imageUrl) {
      const requestBody = { imageUrl };

      this.http
        .post('http://localhost:3000/google/colors', requestBody)
        .subscribe(
          (response) => {
            this.response = response;
            this.isSubmitCorClicked = true;
            console.log('Backend Response:', response);
          },
          (error) => {
            console.error('Backend Error:', error);
          }
        );
    }
  }

  submitDescricao() {
    this.isSubmitCorClicked = false; // Reinicia a flag de clique do submit de cor
    this.isSubmitLogoClicked = false;
    this.isSubmitLabelClicked = false;
    this.isSubmitCharClicked = false;
    this.isSubmitFacesClicked = false;

    const imageLinkControl = this.form.get('imageLink');

    if (imageLinkControl) {
      const imageUrl = imageLinkControl.value;

      if (imageUrl) {
        const requestBody = { imageUrl };

        this.http
          .post('http://localhost:3000/azure/description', requestBody)
          .subscribe(
            (response) => {
              this.response = response;
              this.isSubmitDescricaoClicked = true;
              console.log('Backend Response:', response);
            },
            (error) => {
              console.error('Backend Error:', error);
            }
          );
      }
    }
  }

  submitFace() {
    this.isSubmitCorClicked = false; // Reinicia a flag de clique do submit de cor
    this.isSubmitLogoClicked = false;
    this.isSubmitLabelClicked = false;
    this.isSubmitDescricaoClicked = false;
    this.isSubmitCharClicked = false;

    const imageLinkControl = this.form.get('imageLink');

    if (imageLinkControl) {
      const imageUrl = imageLinkControl.value;

      if (imageUrl) {
        const requestBody = { imageUrl };

        this.http
          .post('http://localhost:3000/google/faces', requestBody)
          .subscribe(
            (response) => {
              this.response = response;
              this.isSubmitFacesClicked = true;
              console.log('Backend Response:', response);
            },
            (error) => {
              console.error('Backend Error:', error);
            }
          );
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
        console.log('imagem Selecinada: ', this.imagemSelecionada);
        this.form.get('imageLink')?.setValue(this.imagemSelecionada);
      };
      reader.readAsDataURL(file);
    }
  }

  submitIMG() {
    if (this.linkImagem) {
      console.log('Link da imagem: ', this.linkImagem);
      this.limparImagemSelecionada();
      this.imagemSelecionada = this.linkImagem;
      this.form.get('imageLink')?.setValue(this.imagemSelecionada);
    }
  }

  limparImagemSelecionada() {
    this.imagemSelecionada = '';
  }
}
