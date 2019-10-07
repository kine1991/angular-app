import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MyValidators } from '../../my.validators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, MyValidators.restrictedEmails], MyValidators.uniqueEmail),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required),
      }),
      skills: new FormArray([])
    });
  }

  onSubmit(){
     console.log('Form submitted: ', this.form);
     console.log(this.form.valid)
     const formData = {...this.form.value}
     console.log(formData)
     this.form.reset()
  }

  setCapital(){
    const cityMap = {
      ru: "Moskow",
      by: "Minsk",
      ua: "Kiev"
    }
    const cityKey = this.form.get("address").get("country").value
    const city = cityMap[cityKey]
    this.form.patchValue({
      address: {city: city}
    })  // patchValue - pass value to form
    // console.log(city)
  }

  addSkill(){
    const controll = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(controll)
    // (this.form.get('skills') as FormArray).push()
  }

}
