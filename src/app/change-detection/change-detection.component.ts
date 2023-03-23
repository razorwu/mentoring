import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements AfterViewChecked {


  // Detect changes => If changes = true => Render component instance

  @Input() user = {
    name: 'Bart',
    surname: 'Simpson'
  }

  num = 3;

  ngAfterViewChecks = 0;
  ngAfterViewChecked(): void {
    this.ngAfterViewChecks++;
    console.log('app-change-detection -> AfterViewChecked', this.ngAfterViewChecks);
  }

  method() {
    this.user.name = 'Bob';
  }
}
