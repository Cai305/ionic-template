import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashscreenComponent } from './splashscreen.component';

const routes: Routes = [
  {
    path: '',
    component: SplashscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplashscreenRoutingModule { }
