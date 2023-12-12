import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Component/employee/employee.component';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"add-employee",component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
