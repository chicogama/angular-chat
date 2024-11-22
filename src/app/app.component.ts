import { fontAwesomeIcons } from '../../shared/font-awesome-icons';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './template/navbar/navbar.component';
import { MenuLateralComponent } from './template/menu-lateral/menu-lateral.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EnvioPerguntaComponent } from './template/envio-pergunta/envio-pergunta.component';
import { HistoricoQuestoesComponent } from './template/historico-questoes/historico-questoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NavbarComponent,
    MenuLateralComponent,
    MenuLateralComponent,
    NavbarComponent,
    HistoricoQuestoesComponent,
    EnvioPerguntaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'chat-front';
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);

  ngOnInit(): void {
    this.initFontAwesome();
  }
  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
