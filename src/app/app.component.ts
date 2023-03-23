import {AfterViewChecked, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  title = 'test';

  ngAfterViewChecks = 0;
  ngAfterViewChecked(): void {
    this.ngAfterViewChecks++;
    console.log('app -> AfterViewChecked', this.ngAfterViewChecks);
  }

  fireEvent() {
    console.log('app click');
  }
}

