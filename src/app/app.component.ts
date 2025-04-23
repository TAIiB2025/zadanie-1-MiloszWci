import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { Product } from '../models/Product.class';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent, KoszykComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';

  produkty: Product[] = [
    new Product('Maslo', 100.00, new Date(2021, 4, 9), true),
    new Product('Chleb', 34.00, new Date(2004, 3, 4), true),
    new Product('Marchew', 33.45, new Date(2025, 2, 3), false),
    new Product('Bulka', 62.60, new Date(2012, 7, 2), false),
    new Product('Sok', 400.02, new Date(1999, 12, 1), true),
  ];

  @ViewChild(KoszykComponent) koszykComponent!: KoszykComponent;
  @ViewChildren(ProductComponent) produktyComponentRefs!: QueryList<ProductComponent>;

  pokazProdukty = true;

  dodajDoKoszyka(cena: number): void {
    this.koszykComponent.dodajProdukt(cena);
  }

  toggleProdukty(): void {
    this.pokazProdukty = !this.pokazProdukty;
  }

  resetujIlosc(): void {
    this.produktyComponentRefs.forEach(p => p.resetujIlosc());
  }
}
