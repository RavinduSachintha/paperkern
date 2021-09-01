import { Component, Input, OnInit } from '@angular/core';
import { ButtonThemes, TextareaThemes } from 'src/app/constants/theme-constants';

@Component({
  selector: 'app-pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.sass']
})
export class PepComponent implements OnInit {

  @Input()
  textareaTheme: TextareaThemes = TextareaThemes.STD_PRIMARY;

  @Input()
  buttonTheme: ButtonThemes = ButtonThemes.STD_PRIMARY_SM;

  @Input()
  textareaContent?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
