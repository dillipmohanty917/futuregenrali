import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurrenderRequestComponent } from './surrender-request.component';

describe('SurrenderRequestComponent', () => {
  let component: SurrenderRequestComponent;
  let fixture: ComponentFixture<SurrenderRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurrenderRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurrenderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
