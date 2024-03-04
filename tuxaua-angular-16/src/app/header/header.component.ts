import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  form: FormGroup;
  response: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      imageFile: [null],
      imageLink: ['https://www.techomoro.com/wp-content/uploads/2019/09/lorem-ipsum.jpg']
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
  
}
