import { Component, OnInit } from '@angular/core';
import { faBookmark,faHeart,faCartPlus,faCaretDown,faUser,faFillDrip} from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { ApiService } from 'src/app/service/api.service';
import { ReplaySubject } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
Bookmark = faBookmark;
Wishlist = faHeart;
Cart = faCartPlus;
Caretdown = faCaretDown;
User = faUser;
Theme = faFillDrip


public bookList : any ;
public totalItem : number = 0;
public totalItem2 : number = 0;
public searchTerm : string ='';
public loginUserData: string ='';

all_book_list: ReplaySubject<any> = new ReplaySubject<any>(1);



  constructor(private api : ApiService,private cartservice : CartService,private WishListService : WishlistService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    this.api.getProducts()
    .subscribe(res=>{
      this.bookList = res;
    })

   this.WishListService.getProducts()
    .subscribe(res=>{
      this.totalItem2 = res.length;
    })
}
addtoCart(item : any){
  this.cartservice.addtoCart(item);
  }

search(event:any){
  let search = event;
  if (!search) {
    this.all_book_list.next(this.bookList.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  this.all_book_list.next(
    this.bookList.filter(
      (book: any) => book.title.toLowerCase().indexOf(search) > -1

    )
  );
      this.searchTerm = event
      this.cartservice.search.next(this.searchTerm);
      
    }
}
