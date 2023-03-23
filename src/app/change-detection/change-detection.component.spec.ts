import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionComponent } from './change-detection.component';
import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'mypipe',
  pure: true
})
export class myPipe implements PipeTransform {
  transform(value: number): number {
    return value * value;
  }
}
