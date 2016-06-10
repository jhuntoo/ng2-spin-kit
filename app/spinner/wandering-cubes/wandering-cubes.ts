import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-wandering-cubes',
  styles: [ require('./wandering-cubes.css') ],
  template: require('./wandering-cubes.html')
})

export class WanderingCubesComponent extends BaseSpinner {}
