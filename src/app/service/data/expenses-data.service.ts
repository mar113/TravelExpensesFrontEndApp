import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from 'src/app/expenses-list/expenses-list.component';

@Injectable({
  providedIn: 'root'
})
export class ExpensesDataService {

  constructor(private http:HttpClient) { }

  getAllExpenses(){
    return this.http.get<Expense[]>(`http://localhost:8080/expenses`);
  }
  getExpenseItem(id){
    return this.http.get<Expense>(`http://localhost:8080/expenses/${id}`);
  }
  deleteExpenseItem(id){
    return this.http.delete(`http://localhost:8080/expenses/${id}`);
  }
  addExpense(expense){
    return this.http.post(`http://localhost:8080/expenses`,expense);
  }
  updateExpense(id,expense){
    return this.http.put(`http://localhost:8080/expenses/edit/${id}`,expense);
  }
}
