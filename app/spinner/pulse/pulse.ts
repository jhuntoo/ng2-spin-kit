import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-pulse',
  styles: [ require('./pulse.css') ],
  template: require('./pulse.html')
})

export class PulseComponent extends BaseSpinner {}
