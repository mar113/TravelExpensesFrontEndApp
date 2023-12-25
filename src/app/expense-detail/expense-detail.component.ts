import { Component, OnInit } from '@angular/core';
import { ExpensesDataService } from '../service/data/expenses-data.service';
import { Expense} from '../expenses-list/expenses-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {
expenseObject:any={};
id:number;
  constructor(private expenseService:ExpensesDataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.expenseService.getExpenseItem(this.id).subscribe(
      respone=>{
        this.expenseObject = respone;
      }
    )
  }


}
