import {Component, Injectable} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-main-page-component',
  templateUrl: './main-page-component.component.html',
  styleUrls: ['./main-page-component.component.scss']
})
export class MainPageComponentComponent {

  constructor(public dialog: MatDialog) {}

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    // @ts-ignore
    this.dialog.open(ButtonDialogModal, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'button-add.html',
  styleUrls: ['./main-page-component.component.scss']
})
export class ButtonDialogModal {
  constructor(public dialogRef: MatDialogRef<ButtonDialogModal>, private mainPageComponent: MainPageComponentComponent, public dialog: MatDialog) {}

  addTask(e: any) {
    console.log("task", e)
    const task = e as unknown as string;
    this.mainPageComponent.todo.push(e)
    console.log("array", this.mainPageComponent.todo)
    this.dialog.closeAll();
  }
}
