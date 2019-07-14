import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableexComponent } from './variableex.component';

describe('VariableexComponent', () => {
  let component: VariableexComponent;
  let fixture: ComponentFixture<VariableexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
