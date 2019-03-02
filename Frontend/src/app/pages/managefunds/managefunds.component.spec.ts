import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefundsComponent } from './managefunds.component';

describe('ManagefundsComponent', () => {
  let component: ManagefundsComponent;
  let fixture: ComponentFixture<ManagefundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
