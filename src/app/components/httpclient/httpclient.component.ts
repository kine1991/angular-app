import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss']
})
export class HttpclientComponent implements OnInit {

  todos: Todo[] = []

  todoTitle = ''
  loading = false

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchTodos()
  }

  fetchTodos(){
    this.loading = true
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .pipe(delay(1500))
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }

  addTodo(){
    if(!this.todoTitle.trim()){
      return
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        console.log(todo)
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  removeTodo(id: number){
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(res => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

}
