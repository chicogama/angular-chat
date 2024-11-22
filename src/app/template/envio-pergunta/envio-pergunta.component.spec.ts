import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioPerguntaComponent } from './envio-pergunta.component';

describe('EnvioPerguntaComponent', () => {
  let component: EnvioPerguntaComponent;
  let fixture: ComponentFixture<EnvioPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioPerguntaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
