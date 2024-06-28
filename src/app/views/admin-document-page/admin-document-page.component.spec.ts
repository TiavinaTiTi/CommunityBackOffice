import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocumentPageComponent } from './admin-document-page.component';

describe('AdminDocumentPageComponent', () => {
  let component: AdminDocumentPageComponent;
  let fixture: ComponentFixture<AdminDocumentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDocumentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDocumentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
