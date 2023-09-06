import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveGroupsComponent } from './executive-groups.component';

describe('ExecutiveGroupsComponent', () => {
  let component: ExecutiveGroupsComponent;
  let fixture: ComponentFixture<ExecutiveGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutiveGroupsComponent]
    });
    fixture = TestBed.createComponent(ExecutiveGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
