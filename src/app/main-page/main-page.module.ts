import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponentComponent } from './main-page-component/main-page-component.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: MainPageComponentComponent
}];

@NgModule({
  declarations: [
    MainPageComponentComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild(routes)
  ]
})
export class MainPageModule { }
