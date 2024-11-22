import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoQuestoesComponent } from './historico-questoes.component';

describe('HistoricoQuestoesComponent', () => {
  let component: HistoricoQuestoesComponent;
  let fixture: ComponentFixture<HistoricoQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoQuestoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
