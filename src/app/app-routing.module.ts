import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { RemoveLoanComponent } from './remove-loan/remove-loan.component';

const routes: Routes = [
{path:'add',component:AddLoanComponent},
  {path:'remove',component:RemoveLoanComponent},
  {path:'getAll', component:AddLoanComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
