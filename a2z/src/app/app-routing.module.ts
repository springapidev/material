import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariableexComponent } from './variableex/variableex.component';

const routes: Routes = [
  {path:'var',component:VariableexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
