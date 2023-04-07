import {Component, Directive, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";

@Component({
  selector: 'app-my-awesome-control',
  templateUrl: './my-awesome-control.component.html',
  styleUrls: ['./my-awesome-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MyAwesomeControlComponent,
    multi: true
  }, {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: MyAwesomeControlComponent

  }]
})
export class MyAwesomeControlComponent implements OnInit, ControlValueAccessor, Validator {

  value = 0;

  clicked = 0;

  disabled = false;

  onChange!: (value: number) => any;

  onTouched!: () => any;

  constructor() { }

  ngOnInit(): void {
  }

  increaseVal() {
    this.value++;
    this.clicked++;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj || 0;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.clicked < 5 ? { clicker : { clicked: this.clicked } } : null;
  }

  registerOnValidatorChange(fn: () => void) {
  }
}
