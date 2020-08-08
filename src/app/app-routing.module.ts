import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';



const routes: Routes = [
  { path: '', component: WeatherWidgetMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
