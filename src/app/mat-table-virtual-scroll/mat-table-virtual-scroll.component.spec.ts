import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableVirtualScrollComponent } from './mat-table-virtual-scroll.component';

describe('MatTableVirtualScrollComponent', () => {
  let component: MatTableVirtualScrollComponent;
  let fixture: ComponentFixture<MatTableVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableVirtualScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatTableVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
