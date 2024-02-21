import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  public f_array: any[] = [];
 
  constructor(private _snackBar: MatSnackBar, private http: HttpClient) {}
 
  onFileChangeBrowse(event: any): void {
    const files: FileList = event.target.files;
    const formData = new FormData();
 
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files.item(i) as File);
    }
 
    this.uploadImage(formData);
  }
 
  onFileChangeDrop(files: File[]): void {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('image', file, file.name);
    });
 
    this.uploadImage(formData);
  }
 
  uploadImage(formData: FormData): void {
    this.http.post<any>('http://localhost:3000/analyzeImage', formData).subscribe(
      (res) => {
        console.log(res);
        this._snackBar.open("Successfully upload!", 'Close', {
          duration: 2000,
        });
      },
      (err) => {
        console.error(err);
        this._snackBar.open("Error uploading image!", 'Close', {
          duration: 2000,
        });
      }
    );
  }
}
