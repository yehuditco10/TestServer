import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//   var Highcharts = require('highcharts');

// // Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);

// // Create the chart
// Highcharts.chart('container', { /*Highcharts options*/ });

// var Highcharts = require('highcharts/highstock');

// // Load Highmaps as a module
// require('highcharts/modules/map')(Highcharts);


// var Highcharts = require('highcharts/highmaps');