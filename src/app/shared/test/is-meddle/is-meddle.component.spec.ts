import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsMeddleComponent } from './is-meddle.component';

describe('IsMeddleComponent', () => {
  let component: IsMeddleComponent;
  let fixture: ComponentFixture<IsMeddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsMeddleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsMeddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
