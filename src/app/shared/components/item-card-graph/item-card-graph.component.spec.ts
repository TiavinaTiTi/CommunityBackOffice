import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardGraphComponent } from './item-card-graph.component';

describe('ItemCardGraphComponent', () => {
  let component: ItemCardGraphComponent;
  let fixture: ComponentFixture<ItemCardGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCardGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
