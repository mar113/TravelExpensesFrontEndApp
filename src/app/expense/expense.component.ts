import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpensesDataService } from '../service/data/expenses-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expenses-list/expenses-list.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
expense:any={};
id:number;
  constructor(private expenseService:ExpensesDataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.expense = new Expense(this.id,'','','',0);
    if(this.id !== undefined){
      this.expenseService.getExpenseItem(this.id).subscribe(
        response=>{
          this.expense = response;
        }
      )
    }
  }
addExpenseItem(){
  if(this.id === undefined){
  this.expenseService.addExpense(this.expense).subscribe(
data=>{
  console.log(data);
  this.router.navigateByUrl('/expenses',{skipLocationChange:true}).then(()=>{
    this.router.navigate([this.router.url]);
  })
  
}
  )
}else{
  this.expenseService.updateExpense(this.id,this.expense).subscribe(
    data=>{
      this.router.navigate(['/expenses']);
    }
  )
}
}
}
