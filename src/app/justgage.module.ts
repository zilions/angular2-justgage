window['Raphael'] = require('raphael');
import 'justgage';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JustgageComponent } from './justgage.component';

const components = [JustgageComponent];

@NgModule({
  declarations: components,
  imports: [
    FormsModule,
    HttpModule
  ],
  exports: components
})
export class JustgageModule { }
