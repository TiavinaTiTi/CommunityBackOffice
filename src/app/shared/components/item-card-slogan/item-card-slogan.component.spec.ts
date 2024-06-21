import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardSloganComponent } from './item-card-slogan.component';

describe('ItemCardSloganComponent', () => {
  let component: ItemCardSloganComponent;
  let fixture: ComponentFixture<ItemCardSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardSloganComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCardSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
