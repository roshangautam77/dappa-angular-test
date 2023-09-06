import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveGroupEditComponent } from './executive-group-edit.component';

describe('ExecutiveGroupEditComponent', () => {
  let component: ExecutiveGroupEditComponent;
  let fixture: ComponentFixture<ExecutiveGroupEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutiveGroupEditComponent]
    });
    fixture = TestBed.createComponent(ExecutiveGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
