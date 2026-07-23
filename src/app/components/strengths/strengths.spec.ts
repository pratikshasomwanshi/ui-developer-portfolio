import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strengths } from './strengths';

describe('Strengths', () => {
  let component: Strengths;
  let fixture: ComponentFixture<Strengths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strengths],
    }).compileComponents();

    fixture = TestBed.createComponent(Strengths);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
