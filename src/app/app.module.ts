import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoComponent} from './demo/demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { ContentItemDirective } from './content-item.directive';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ChangeDetectionOnPushComponent } from './change-detection-on-push/change-detection-on-push.component';
import {myPipe} from "./change-detection/change-detection.component.spec";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ChildComponent,
    ContentItemDirective,
    ChangeDetectionComponent,
    ChangeDetectionOnPushComponent,
    myPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
