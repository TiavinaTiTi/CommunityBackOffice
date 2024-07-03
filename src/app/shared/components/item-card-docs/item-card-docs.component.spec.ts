import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardDocsComponent } from './item-card-docs.component';

describe('ItemCardDocsComponent', () => {
  let component: ItemCardDocsComponent;
  let fixture: ComponentFixture<ItemCardDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardDocsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCardDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
