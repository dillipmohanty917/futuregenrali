import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialWithdrawlRequestComponent } from './partial-withdrawl-request.component';

describe('PartialWithdrawlRequestComponent', () => {
  let component: PartialWithdrawlRequestComponent;
  let fixture: ComponentFixture<PartialWithdrawlRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialWithdrawlRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialWithdrawlRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
