import { Injectable } from '@angular/core';
import {BehaviorSubject, merge, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  todo$ = new BehaviorSubject( ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'])
  done$ = new BehaviorSubject(['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'])

  constructor() { }

  addTodo(task: any) {
    console.log("add")
    this.todo$.next([...this.todo$.getValue(), task])
  }

  deleteTodo(item: any) {
    // Get current items from the BehaviorSubject.
    const currentItems = this.todo$.getValue();
    // Use the id of the argument item to remove it from the currentItems.
    // @ts-ignore
    const itemsWithoutDeleted = currentItems.filter(itemObservable => itemObservable !== item);
    // Emit the new array.
    console.log("olé", item)
    this.todo$.next(itemsWithoutDeleted);
  }

  deleteDone(item: any) {
    // Get current items from the BehaviorSubject.
    const currentItems = this.done$.getValue();
    // Use the id of the argument item to remove it from the currentItems.
    // @ts-ignore
    const itemsWithoutDeleted = currentItems.filter(itemObservable => itemObservable !== item);
    // Emit the new array.
    console.log("olé", item)
    this.done$.next(itemsWithoutDeleted);
  }
}
