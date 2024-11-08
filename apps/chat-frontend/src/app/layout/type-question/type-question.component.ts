import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-type-question',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './type-question.component.html',
  styleUrl: './type-question.component.css',
})
export class TypeQuestionComponent {}
