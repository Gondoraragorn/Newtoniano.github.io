import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingOnComponent } from './working-on.component';

describe('WorkingOnComponent', () => {
  let component: WorkingOnComponent;
  let fixture: ComponentFixture<WorkingOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
