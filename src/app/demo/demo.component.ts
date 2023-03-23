import {AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {ChangeDetectionOnPushComponent} from "../change-detection-on-push/change-detection-on-push.component";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements AfterViewChecked, AfterViewInit {
  title = 'Demo component';

  user = {
    name: 'Bill',
    surname: 'Armstrong'
  }

  @ViewChild(ChangeDetectionOnPushComponent) cd!: ChangeDetectionOnPushComponent;

  ngAfterViewChecks = 0;
  ngAfterViewChecked(): void {

    //this.cd.user.name = 'Homer';
    this.ngAfterViewChecks++;
    console.log('app-demo -> AfterViewChecked', this.ngAfterViewChecks);
  }

  ngAfterViewInit(): void {
    this.cd.user = this.user;
  }

  click() {
    console.log('click')
  }
}



