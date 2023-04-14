import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterTestingComponent} from "./router-testing.component";
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', component: RouterTestingComponent}
]

@NgModule({
  declarations: [RouterTestingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RoutingTestingModuleModule { }
