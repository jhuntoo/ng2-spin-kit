import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-rotating-plane',
  styles: [ require('./rotating-plane.css') ],
  template: require('./rotating-plane.html')
})

export class RotatingPlaneComponent extends BaseSpinner {}
