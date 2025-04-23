import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/Product.class';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() produkt!: Product;
  @Output() dodanoDoKoszyka = new EventEmitter<number>();

  iloscWkoszyku = 0;

  kliknijDodaj(): void {
    this.iloscWkoszyku++;
    this.dodanoDoKoszyka.emit(this.produkt.cena);
  }
  resetujIlosc(): void {
    this.iloscWkoszyku = 0;
  }
  ukryty = false;

}