import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonDialogModal, MainPageComponentComponent} from './main-page-component/main-page-component.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [{
  path: '',
  component: MainPageComponentComponent
}];

@NgModule({
  declarations: [
    MainPageComponentComponent,
    ButtonDialogModal
  ],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MainPageModule { }
