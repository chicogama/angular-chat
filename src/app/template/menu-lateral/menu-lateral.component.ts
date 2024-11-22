import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faGauge,
  faMessage,
  faGear,
  faChartLine,
  IconDefinition,
  faPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { IMenuLateral } from '../../models/IMenuLateral';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss',
})
export class MenuLateralComponent implements IMenuLateral {
  label!: string;
  icon!: IconDefinition;
  route!: string;
  active!: boolean;
  isExpanded = true;
  faBars = faBars; // Ícone do botão toggle
  faXmark = faXmark;

  menuItems: IMenuLateral[] = [
    {
      label: 'Nova Conversa',
      icon: faPlus,
      route: '/nova-conversa',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: true,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
    {
      label: 'Conversas',
      icon: faMessage,
      route: '/Conversas',
      active: false,
    },
  ];

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
