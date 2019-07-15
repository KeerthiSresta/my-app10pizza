import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri='http://localhost:4000/prod';
  products:Product[];
  constructor(public httpClient:HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.uri}`+'/allProd');
  }
  getProductById(prodId:any):Observable<Product>{
    return this.httpClient.get<Product>(`${this.uri}`+'/'+prodId);
  }
  public addToCart(product){
    this.products.push(product);
    console.log(this.products);
  }
  getCartProducts(){
    console.log("Message"+this.products);
    return this.products;
  }
  addProduct(Id,name,price){
    let prod={
      prodId:Id,
        prodName:name,
        price:price
    };
    return this.httpClient.post(`${this.uri}`+'/addProd',prod)
    .subscribe(res=>console.log("New Product registered successfully "));
  }
  deleteProduct(prodId:number)
  {
      return this.httpClient.delete(`${this.uri}`+'/delete/'+`${prodId}`)
      .subscribe(res=>console.log("Product deleted Successfully"));
  }
  updateProduct(prodId,price):any{ 
    return this.httpClient.put(`${this.uri}`+'/update/'+prodId+'/'+price,{})
    .subscribe(res=>console.log(prodId+" updated from database"));
}

}
