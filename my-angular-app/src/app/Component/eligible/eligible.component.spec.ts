import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleComponent } from './eligible.component';

describe('EligibleComponent', () => {
  let component: EligibleComponent;
  let fixture: ComponentFixture<EligibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EligibleComponent]
    });
    fixture = TestBed.createComponent(EligibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
