import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  imports: [CommonModule],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
  wartoscKoszyka = 0;

  @Output() zresetowanoKoszyk = new EventEmitter<void>();

  dodajProdukt(cena: number): void {
    this.wartoscKoszyka += cena;
  }

  resetujKoszyk(): void {
    this.wartoscKoszyka = 0;
    this.zresetowanoKoszyk.emit();
  }
}
