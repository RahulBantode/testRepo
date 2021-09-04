import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { InvalidComponent } from './invalid/invalid.component';
import { BlankComponent } from './blank/blank.component';
const routes: Routes =
  [
    { path: '', component: BlankComponent },
    { path: 'First', component: FirstComponent },
    { path: 'Second', component: SecondComponent },
    { path: "**", component: InvalidComponent } //wild-card route
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
