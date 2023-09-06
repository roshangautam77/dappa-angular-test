import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveAddComponent } from './executive-add.component';

describe('ExecutiveAddComponent', () => {
  let component: ExecutiveAddComponent;
  let fixture: ComponentFixture<ExecutiveAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutiveAddComponent]
    });
    fixture = TestBed.createComponent(ExecutiveAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
