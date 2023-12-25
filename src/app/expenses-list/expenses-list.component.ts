import { Component, OnInit } from '@angular/core';
import { ExpensesDataService } from '../service/data/expenses-data.service';
import { Router } from '@angular/router';
export class Expense{
  constructor(
  public id:number,
  public expenseName:string,
  public description:string,
  public vendor:string,
  public amount:number){}
}
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  constructor(private expenseService: ExpensesDataService, private router:Router) {}
  expenses:Expense[];
  message:string;
  ngOnInit() {
    this.expensesItemList();
  }
expensesItemList(){
  this.expenseService.getAllExpenses().subscribe(
    response=>{
      console.log(response);
      this.expenses=response
    }
  )
}

details(id){
  this.router.navigate(['expenses',id]);
  }

deleteExpense(id){
  this.expenseService.deleteExpenseItem(id).subscribe(
    Response=>{
      this.message="Item deleted successfully";
      this.expensesItemList();
    }
  )
}
updateExpenseItem(id){
  this.router.navigate(['expenses/edit',id]);
}

}
