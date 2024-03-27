import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowResultComponent } from './show-main/show-result.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FacialRecognizeComponent } from './facial-recognize/facial-recognize.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tool', component: ShowResultComponent },
  { path: 'facial', component: FacialRecognizeComponent } //Adding new Path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
