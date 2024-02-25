import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { FileDragNDropDirective } from './upload-image/upload-image.directive';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShowResultComponent } from './show-result/show-result.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    FileDragNDropDirective,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    ShowResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
