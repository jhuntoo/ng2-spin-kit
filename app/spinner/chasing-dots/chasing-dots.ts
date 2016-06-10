import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-chasing-dots',
  styles: [ require('./chasing-dots.css') ],
  template: require('./chasing-dots.html')
})

export class ChasingDotsComponent extends BaseSpinner {}
