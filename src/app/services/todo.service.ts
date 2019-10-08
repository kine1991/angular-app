import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, catchError, map, tap } from 'rxjs/operators';

export interface Todo {
  completed: boolean
  title: string
  id?: number
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  addTodo(todo: Todo): Observable<Todo>{
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    })
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers
    }) 
  }

  fetchTodos(): Observable<Todo[]>{
    let params = new HttpParams()
    params = params.append('_limit', '4')
    params = params.append('custom', 'anything')
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos`, {
      params: params,
      observe: 'response'
    })
      .pipe(
        map(response => {
          return response.body
        }),
        delay(500),
        catchError(error => {
          console.log('errrrrr', error.message)
          return throwError(error)
        })
      )
  }

  removeTodo(id: number): Observable<any>{
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'  // получем доступ до всех событи (запрос подготовлен запрос ожидаеться....)
    })
    .pipe(
        tap(event => {
          // console.log(event)
          if(event.type === HttpEventType.Sent){
            console.log('sent')
          }
          if(event.type === HttpEventType.Response){
            console.log('Response')
          }
        })
    )
  }

  completeTodo(id: number): Observable<Todo>{
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}

