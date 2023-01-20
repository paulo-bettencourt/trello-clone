import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  todo$ = new BehaviorSubject<string[]>( ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'])
  done$ = new BehaviorSubject<string[]>(['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'])

  addNewTask(newTask: string) {
    this.todo$.next([...this.todo$.getValue(), newTask])
  }

  deleteTodo(item: string) {
    // Get current items from the BehaviorSubject.
    const currentItems = this.todo$.getValue();
    // Use the id of the argument item to remove it from the currentItems.
    // @ts-ignore
    const itemsWithoutDeleted = currentItems.filter(itemObservable => itemObservable !== item);
    // Emit the new array.
    this.todo$.next(itemsWithoutDeleted);
  }

  deleteDone(item: string) {
    // Get current items from the BehaviorSubject.
    const currentItems = this.done$.getValue();
    // Use the id of the argument item to remove it from the currentItems.
    // @ts-ignore
    const itemsWithoutDeleted = currentItems.filter(itemObservable => itemObservable !== item);
    // Emit the new array.
    this.done$.next(itemsWithoutDeleted);
  }
}
