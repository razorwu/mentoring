import {AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, AfterViewInit {
  title = 'Demo component';

  @Input() template: TemplateRef<any>|undefined;

  @ViewChild('inputElement') inputEl!: ElementRef;
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  @ViewChild(MyServiceService) myService!: MyServiceService;
  @ViewChild('defaultTmpl') defaultTmpl!: TemplateRef<any>

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.inputEl);

    const input: HTMLInputElement = this.inputEl.nativeElement;
    input.value = 'John';

    console.log('ngAfterViewInit', this.childComponent);

    this.myService.data$.subscribe(value => {
      console.log(value);
    });


    this.template = this.template || this.defaultTmpl;
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.inputEl);
  }

}



