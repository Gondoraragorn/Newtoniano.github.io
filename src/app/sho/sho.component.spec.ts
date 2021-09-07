import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SHOComponent } from './sho.component';

describe('SHOComponent', () => {
  let component: SHOComponent;
  let fixture: ComponentFixture<SHOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SHOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SHOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
