import { Component } from '@angular/core';
//import { Employee } from '../employee';
import { prodList } from './product-list';
import { Product } from '../product';

@Component({
  selector: 'app-prodList',
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  emp_List:Product[]=prodList;
  selectedProd:Product;
onSelection(prod:Product)
{
    this.selectedProd=prod;
}
}