import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponentComponent} from "./main-page/main-page-component/main-page-component.component";

const routes: Routes = [{
  path: '',
  loadChildren: () => import('../app/main-page/main-page.module').then(m => m.MainPageModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
