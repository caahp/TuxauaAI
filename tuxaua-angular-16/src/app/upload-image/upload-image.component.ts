import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  public f_array: any[] = [];

  constructor(private _snackBar: MatSnackBar){}

  onFileChangeBrowse(event:any){
    const files: File[] = event.target.files
    this.f_array = files
    console.log(this.f_array);
    this._snackBar.open("Successfully upload!", 'Close', {
      duration: 2000,
    });
  }

  onFileChangeDrop(files: File[]): void {
    this.f_array = files;
    console.log(this.f_array);
    this._snackBar.open("Successfully upload!", 'Close', {
      duration: 2000,
    });
  }

  // deleteFile(f:any){
  //   this.files = this.files.filter(function(w){ return w.name != f.name });
  //   this._snackBar.open("Successfully delete!", 'Close', {
  //     duration: 2000,
  //   });
  // }
}
