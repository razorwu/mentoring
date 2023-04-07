import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {of} from "rxjs";

export function createValidator(): ValidatorFn {
  return (control): ValidationErrors | null => {
    return null;
  }
}

export function createAsyncValidator(): AsyncValidatorFn {
  return (control) => {
    return of(null);
  }
}


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnDestroy, OnInit {
  title = 'Demo form';

  clicker: FormControl = new FormControl(2, {
    validators: [createValidator()],
    asyncValidators: [createAsyncValidator()]
  });

  form: FormGroup = new FormGroup( {
    clicksCount: this.clicker
  });

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    //this.clicker.disable();
    this.form.valueChanges.subscribe(value => {
      console.log(value, this.form.valid, this.clicker.errors);
    })
  }
}

// Nested forms

// https://blog.angular-university.io/angular-custom-form-controls/
