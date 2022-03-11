import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
 public cartItemList : any =[]
  public bookList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.bookList.asObservable();
  }

  setProduct(book : any){
    this.cartItemList.push(...book);
    this.bookList.next(book);
  }
  addtoCart(book : any){
    this.cartItemList.push(book);
    this.bookList.next(this.cartItemList);
  
  }


}
