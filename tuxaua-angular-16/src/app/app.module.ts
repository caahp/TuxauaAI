import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { FileDragNDropDirective } from './upload-image/upload-image.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component'; 
import { ShowResultComponent } from './show-result/show-result.component';
import { DivAnaliseImagensComponent } from './div-analise-imagens/div-analise-imagens.component';


import { ReactiveFormsModule } from '@angular/forms'; // Importe ReactiveFormsModule





@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    FileDragNDropDirective,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    ShowResultComponent,
    DivAnaliseImagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule // Adicione ReactiveFormsModule nos imports do seu módulo

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
