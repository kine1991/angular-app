import { Component, OnInit } from '@angular/core';

import { /*fromEvent, interval, */ Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  
  sub: Subscription


  constructor() { 
    // const intervalStream$ = interval(1000)
    const stream$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(1)
      }, 1500)
    })
    
    this.sub = stream$.subscribe(
      value => console.log(value + 'value'),
      error => console.log(error + 'error'),
      () => console.log('complete')
      
    )

    // this.sub = intervalStream$
    //   .pipe(
    //       filter(value => value % 2 === 0),
    //       map((value) => `Mapped value ${value}`)
    //   )
    //   .subscribe((value) => {
    //   console.log(value)
    // })
  }

  stop(){
     this.sub.unsubscribe()
  }

  ngOnInit() {
  }

}
