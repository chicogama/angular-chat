import { fontAwesomeIcons } from './../../shared/font-awesome-icons';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuLateralComponent } from './layout/menu-lateral/menu-lateral.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ChatHistoryComponent } from './layout/chat-history/chat-history.component';
import { TypeQuestionComponent } from './layout/type-question/type-question.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    FontAwesomeModule,
    MenuLateralComponent,
    NavbarComponent,
    ChatHistoryComponent,
    TypeQuestionComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'chat-frontend';
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
