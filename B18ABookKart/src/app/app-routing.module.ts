import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './component/books/books.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MyordersComponent } from './component/myorders/myorders.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';



const routes: Routes = [

 {
    path:'',component:BooksComponent
  },
 
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'wishlist',component:WishlistComponent
  },
  {
    path:'userlogin',component:UserloginComponent
  },
  {
    path:'books',component:BooksComponent
  },
  {
    path:'myorders',component:MyordersComponent
  },
  {
    path:'logout',component:LogoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
