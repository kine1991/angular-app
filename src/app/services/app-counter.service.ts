import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root' // говогри angular зарегистрировать за нас в app.module.ts providers 
}) // если добавлен @Injectable то мы можем инжектировать в вервис другие сервисы
export class AppCounterService {
  counter = 0
  increase(){
    this.logService.log('test @')
    this.counter++
  }
  decrease(){
    this.counter--
  }

  constructor(private logService: LogService) { }
}
