import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component'; 
import { ShowResultComponent } from './show-main/show-result.component';
import { DivAnaliseImagensComponent } from './div-analise-imagens/div-analise-imagens.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

import { ReactiveFormsModule } from '@angular/forms'; // Importe ReactiveFormsModule





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    ShowResultComponent,
    DivAnaliseImagensComponent,
    VideoPlayerComponent
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
