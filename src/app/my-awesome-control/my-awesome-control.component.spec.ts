import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeControlComponent } from './my-awesome-control.component';

describe('MyAwesomeControlComponent', () => {
  let component: MyAwesomeControlComponent;
  let fixture: ComponentFixture<MyAwesomeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAwesomeControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAwesomeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
