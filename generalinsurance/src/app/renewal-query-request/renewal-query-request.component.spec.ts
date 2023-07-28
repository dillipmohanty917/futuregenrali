import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalQueryRequestComponent } from './renewal-query-request.component';

describe('RenewalQueryRequestComponent', () => {
  let component: RenewalQueryRequestComponent;
  let fixture: ComponentFixture<RenewalQueryRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewalQueryRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalQueryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
