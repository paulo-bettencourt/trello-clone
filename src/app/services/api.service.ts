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

}
