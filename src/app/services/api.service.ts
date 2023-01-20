import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  todo$ = new BehaviorSubject<string[]>( ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'])
  done$ = new BehaviorSubject<string[]>(['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'])

  addNewTask(newTask: string) {ß
    this.todo$.next([...this.todo$.getValue(), newTask])
  }

  deleteTodo(item: string) {
    const currentItems = this.todo$.getValue();
    const itemsWithoutDeleted = currentItems.filter(itemObservable => itemObservable !== item);
    this.todo$.next(itemsWithoutDeleted);
  }

  deleteDone(item: string) {
    const currentItems = this.done$.getValue();
    const itemsWithoutDeleted = currentItems.filter(itemObservable => itemObservable !== item);
    this.done$.next(itemsWithoutDeleted);
  }
}
