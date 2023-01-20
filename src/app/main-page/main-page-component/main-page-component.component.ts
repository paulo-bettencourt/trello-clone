import {AfterViewInit, Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from "../../services/api.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-main-page-component',
  templateUrl: './main-page-component.component.html',
  styleUrls: ['./main-page-component.component.scss'],
})
export class MainPageComponentComponent {

  todo!: string[];
  done!: string[];

  constructor(public dialog: MatDialog, private service: ApiService) {
    this.service.todo$.subscribe(
      (data: string[])  => {
        this.todo = data
      }
    )

    this.service.done$.subscribe(
      (data: string[]) => {
        this.done = data
      }
    )
  }


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

  addTask(task: string) {
    this.todo.push(task)
    this.dialog.closeAll();
  }

  deleteItemTodo(item: string) {
    this.service.deleteTodo(item);
  }

  deleteItemDone(item: string) {
    this.service.deleteDone(item);
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'button-add.html',
  styleUrls: ['./main-page-component.component.scss'],
})
export class ButtonDialogModal implements AfterViewInit{

  input!: HTMLElement;
  modalButton!: HTMLElement;

  constructor(public dialogRef: MatDialogRef<ButtonDialogModal>, private service: ApiService, public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.input = document.getElementById("myInputAdd")!;
    this.modalButton = document.getElementById("modal-button")!;
    this.enterAndClick();
  }

  addTask(newTask: string) {
    this.service.addNewTask(newTask);
    this.enterAndClick();
    this.dialog.closeAll();
  }

  enterAndClick() {
    this.input.addEventListener("keypress", (event: Event) => {
      // @ts-ignore
      if (event.key === "Enter") {
        this.modalButton.click();
        this.dialog.closeAll();
      }
    });
  }
}
