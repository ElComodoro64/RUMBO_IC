import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosHistoricos } from './precios-historicos';

describe('PreciosHistoricos', () => {
  let component: PreciosHistoricos;
  let fixture: ComponentFixture<PreciosHistoricos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreciosHistoricos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreciosHistoricos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
