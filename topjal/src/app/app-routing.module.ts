import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { ProjectsComponent } from './projects/projects.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'tutorials',component:TutorialsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'libraries',component:LibrariesComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'adb',component:AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
