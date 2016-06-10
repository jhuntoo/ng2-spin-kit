import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-circle',
  styles: [ require('./circle.css') ],
  template: require('./circle.html')
})

export class CircleComponent extends BaseSpinner {}
