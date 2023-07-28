import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurrenderPosComponent } from './surrender-pos.component';

describe('SurrenderPosComponent', () => {
  let component: SurrenderPosComponent;
  let fixture: ComponentFixture<SurrenderPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurrenderPosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurrenderPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
