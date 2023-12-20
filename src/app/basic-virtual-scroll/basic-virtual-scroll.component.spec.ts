import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVirtualScrollComponent } from './basic-virtual-scroll.component';

describe('BasicVirtualScrollComponent', () => {
  let component: BasicVirtualScrollComponent;
  let fixture: ComponentFixture<BasicVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicVirtualScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
