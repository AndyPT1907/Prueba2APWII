import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error303Component } from './error303.component';

describe('Error303Component', () => {
  let component: Error303Component;
  let fixture: ComponentFixture<Error303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error303Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Error303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
