import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-router-testing',
  templateUrl: './router-testing.component.html',
  styleUrls: ['./router-testing.component.scss']
})
export class RouterTestingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const data = await firstValueFrom(this.route.data);
    console.log(data);
  }
}
