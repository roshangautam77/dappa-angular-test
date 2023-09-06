import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveDetailsComponent } from './executive-details.component';

describe('ExecutiveDetailsComponent', () => {
  let component: ExecutiveDetailsComponent;
  let fixture: ComponentFixture<ExecutiveDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutiveDetailsComponent]
    });
    fixture = TestBed.createComponent(ExecutiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
