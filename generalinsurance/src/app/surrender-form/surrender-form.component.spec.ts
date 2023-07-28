import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurrenderFormComponent } from './surrender-form.component';

describe('SurrenderFormComponent', () => {
  let component: SurrenderFormComponent;
  let fixture: ComponentFixture<SurrenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurrenderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurrenderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
