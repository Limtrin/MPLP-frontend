import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestTableComponent } from './test-table/test-table.component';

const routes: Routes = [
  { path: '', component: TestTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
