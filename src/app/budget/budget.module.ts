import { BudgetRoutingModule } from './budget-routing.module';



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    BudgetRoutingModule
  ],
  declarations: [BudgetComponent, CategoryComponent]
})
export class BudgetModule { }
