import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurrenderretainComponent } from './surrenderretain.component';

describe('SurrenderretainComponent', () => {
  let component: SurrenderretainComponent;
  let fixture: ComponentFixture<SurrenderretainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurrenderretainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurrenderretainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
