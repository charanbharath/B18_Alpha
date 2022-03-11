import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishItemList : any =[]
  public bookList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.bookList.asObservable();
  }

  setProduct(book : any){
    this.wishItemList.push(...book);
    this.bookList.next(book);
  }
  addtoWishList(book : any){
    this.wishItemList.push(book);
    this.bookList.next(this.wishItemList);
    
  
  }

}
