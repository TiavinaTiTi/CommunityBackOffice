import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardPersonComponent } from './item-card-person.component';

describe('ItemCardPersonComponent', () => {
  let component: ItemCardPersonComponent;
  let fixture: ComponentFixture<ItemCardPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCardPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
