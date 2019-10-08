import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss']
})
export class HttpclientComponent implements OnInit {

  todos: Todo[] = []
  todoTitle = ''
  loading = false
  error = '  '

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.fetchTodos()
  }

  fetchTodos(){
    this.loading = true
    this.todoService.fetchTodos()
      .subscribe(todos => {
        console.log()
        this.todos = todos
        this.loading = false
      }, error => {
        this.error = error.message
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
    this.todoService.addTodo(newTodo)      
      .subscribe(todo => {
        console.log(todo)
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  removeTodo(id: number){
    this.todoService.removeTodo(id)
      .subscribe(res => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  completeTodo(id: number){
    console.log(id)
    this.todoService.completeTodo(id)
    .subscribe(todo => {
      this.todos.find(t => t.id === todo.id).completed = true
    })
  }

}
