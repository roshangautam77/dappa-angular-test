import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveGroupAddComponent } from './executive-group-add.component';

describe('ExecutiveGroupAddComponent', () => {
  let component: ExecutiveGroupAddComponent;
  let fixture: ComponentFixture<ExecutiveGroupAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutiveGroupAddComponent]
    });
    fixture = TestBed.createComponent(ExecutiveGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
