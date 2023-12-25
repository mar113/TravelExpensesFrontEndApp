import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseComponent } from './expense/expense.component';


const routes: Routes = [
  {path:'expenses',component:ExpensesListComponent},
  {path:'expenses/:id',component:ExpenseDetailComponent},
  {path:'expenses/edit/:id',component:ExpenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
