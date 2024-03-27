import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facial-recognize',
  templateUrl: './facial-recognize.component.html',
  styleUrl: './facial-recognize.component.css'
})
export class FacialRecognizeComponent {
  constructor(private router: Router) {}

  // Funções de redirecionamento
  // Tambem ficam no app-routing-modules.ts
  navigateToOther() {
    this.router.navigate(['/facial']);
  }

}
