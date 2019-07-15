import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-addto-cart',
  templateUrl: './product-addto-cart.component.html',
  styleUrls: ['./product-addto-cart.component.css']
})
export class ProductAddtoCartComponent implements OnInit {
products:Product[]=[];
  private product:Product;
  constructor(private route:ActivatedRoute, 
    private service:ProductService,
    private router:Router) { }

  ngOnInit() {
    let prodId=+this.route.snapshot.paramMap.get("prodId");
    console.log(prodId+" in addtocart");
    // let prodName=this.route.snapshot.paramMap.get("prodName");
    // console.log(prodName+" in addtocart");
    this.service.getProductById(prodId).subscribe(p=>{console.log(p);
    this.products.push(p[0]);
    console.log(this.products);
    });
    
  }

}