import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadImageComponent } from './upload-image/upload-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  declarations: [
    UploadImageComponent
  ],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tuxaua-ai';
}
