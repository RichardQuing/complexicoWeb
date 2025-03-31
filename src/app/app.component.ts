import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./page/home/home.component";
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, NavBarComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';

  constructor(private cartService:CartService){}

  isCartVisible() {
    return this.cartService.isCartVisible();
  }
}
