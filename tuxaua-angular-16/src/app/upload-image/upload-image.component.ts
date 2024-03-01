import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})

export class UploadImageComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      imageFile: [null],
      imageLink: ['https://portal.vision.cognitive.azure.com/dist/assets/OCR1-6dda571d.jpg']
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
            console.log(response);
          });
      }
    }
  }
}

