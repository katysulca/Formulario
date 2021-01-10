import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesdemovimientosdiariosComponent } from './reportesdemovimientosdiarios.component';

describe('ReportesdemovimientosdiariosComponent', () => {
  let component: ReportesdemovimientosdiariosComponent;
  let fixture: ComponentFixture<ReportesdemovimientosdiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesdemovimientosdiariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesdemovimientosdiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
