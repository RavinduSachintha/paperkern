import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ButtonThemes,
  ButtonThemeTemplates,
} from 'src/app/constants/theme-constants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
  // button label
  @Input()
  label = 'Button';

  // button theme
  @Input()
  theme: ButtonThemes = ButtonThemes.STD_PRIMARY_MD;

  // click action event
  @Output()
  onClick = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  // button css classes
  public get classes(): string[] {
    let themeTemplate = ButtonThemeTemplates[this.theme];

    return [
      'paperkern-button',
      themeTemplate.mode,
      themeTemplate.border ? 'border' : 'borderless',
      themeTemplate.shadow ? 'shadow' : 'shadowless',
      themeTemplate.size,
    ];
  }
}
