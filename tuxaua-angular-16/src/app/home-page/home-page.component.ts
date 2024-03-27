import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html' ,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  isMobile: boolean = false;

  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 768; 
  }

  ngOnInit() {
    
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Funções de redirecionamento
  // Tambem ficam no app-routing-modules.ts
  navigateToTool() {
    this.router.navigate(['/tool']);
  }

  navigateToFacial() { 
    this.router.navigate(['/facial']); 
  }

}
