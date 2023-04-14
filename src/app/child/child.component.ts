import {AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList} from '@angular/core';
import {MyServiceService} from "../my-service.service";
import {ContentItemDirective} from "../content-item.directive";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [MyServiceService]
})
export class ChildComponent implements OnInit, AfterContentInit {

  title = "Child component"

  @ContentChildren(ContentItemDirective) content!: QueryList<ContentItemDirective>;

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {

  }

}
