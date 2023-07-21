import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pmdashboardComponent } from './pm-dashboard.component';

describe('pmdashboardComponent', () => {
  let component: pmdashboardComponent;
  let fixture: ComponentFixture<pmdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [pmdashboardComponent]
    });
    fixture = TestBed.createComponent(pmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
