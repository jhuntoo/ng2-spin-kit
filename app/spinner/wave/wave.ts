import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-wave',
  styles: [ require('./wave.css') ],
  template: require('./wave.html')
})

export class WaveComponent extends BaseSpinner {}
