import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsLeftComponent } from './is-left.component';

describe('IsLeftComponent', () => {
  let component: IsLeftComponent;
  let fixture: ComponentFixture<IsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
