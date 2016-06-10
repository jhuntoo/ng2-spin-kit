import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-folding-cube',
  styles: [require('./folding-cube.css') ],
  template: require('./folding-cube.html')
})

export class FoldingCubeComponent extends BaseSpinner {}
