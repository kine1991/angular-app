import { Component, OnInit, Provider, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef( () => SwitchComponent),
  multi: true
}
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR]
})


export class SwitchComponent implements OnInit, ControlValueAccessor {
  private onChange = (value: any) => {}

  setState(state: string){
    console.log(state)
    this.state = state
    this.onChange(this.state)
  }

  writeValue(state: any): void {
    this.state = state
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }
  

  state = 'off'




  constructor() { }

  ngOnInit() {
  }



}
