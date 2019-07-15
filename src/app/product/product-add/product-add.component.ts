import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/Forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProdAddComponent implements OnInit {
  angForm:FormGroup
  constructor(private fb:FormBuilder,private productService:ProductService) { 
  this.createForm();
}
  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      prodId:['',Validators.required],
      prodName:['',Validators.required],
      price:['',Validators.required]
    });

}
addProduct(prodId,prodName,price){
  this.productService.addProduct(prodId,prodName,price);
}

}
// products:Product[]=[];
// constructor(private route:ActivatedRoute,private prodService:ProductService) { }
// ngOnInit() {
//   let prodName=this.route.snapshot.paramMap.get("prodName");
//   let price=this.route.snapshot.paramMap.get("price");
//   this.addProduct(prodName,price);
// }
// addProduct(prodName,price) {
//   this.prodService.addProduct(prodName,price);
// }

// }