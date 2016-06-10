import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-word-press',
  styles: [ require('./word-press.css') ],
  template: require('./word-press.html')
})

export class WordPressComponent extends BaseSpinner {}
