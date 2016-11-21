/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowdataComponent } from './showdata.component';

describe('ShowdataComponent', () => {
  let component: ShowdataComponent;
  let fixture: ComponentFixture<ShowdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
