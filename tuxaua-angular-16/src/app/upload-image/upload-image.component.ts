import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  imageUrl: string | null = null;
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageUrl = URL.createObjectURL(file);
      this.selectedFile = file;
    }
  }

  processImage(): void {
    if (this.selectedFile) {
      // Aqui você pode enviar a imagem para o backend para processamento
      // Use this.selectedFile para obter a referência para a imagem
      // Exemplo: this.imageService.processImage(this.selectedFile).subscribe(...);
    }
  }
  
}
