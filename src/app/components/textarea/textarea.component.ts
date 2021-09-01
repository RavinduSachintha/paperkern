import { Component, Input, OnInit } from '@angular/core';
import {
  TextareaThemes,
  TextareaThemeTemplates,
} from 'src/app/constants/theme-constants';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass'],
})
export class TextareaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // textarea content
  @Input()
  content?: string;

  // textarea theme
  @Input()
  theme: TextareaThemes = TextareaThemes.STD_PRIMARY;

  // textarea css classes
  public get classes(): string[] {
    let themeTemplate = TextareaThemeTemplates[this.theme];

    return [
      'paperkern-textarea',
      themeTemplate.mode,
      themeTemplate.border ? 'border' : 'borderless',
      themeTemplate.shadow ? 'shadow' : 'shadowless',
    ];
  }
}
