import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsRightComponent } from './is-right.component';

describe('IsRightComponent', () => {
  let component: IsRightComponent;
  let fixture: ComponentFixture<IsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
