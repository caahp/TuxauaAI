import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facial-recognize',
  standalone: true,
  imports: [],
  templateUrl: './facial-recognize.component.html',
  styleUrl: './facial-recognize.component.css'
})
export class FacialRecognizeComponent {
  constructor(private router: Router) {}

  navigateToOther() {
    this.router.navigate(['/facial']);
  }

}
