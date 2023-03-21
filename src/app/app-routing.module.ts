import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'create',
    component: SignupComponent
  },
  {
    path: 'showall',
    component:ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
