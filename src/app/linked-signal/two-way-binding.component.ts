import { ChangeDetectionStrategy, Component, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  template: `
    <label for="product-select">Product</label>
    <select id="product-select" [(ngModel)]="product">
        @for (product of products; track $index) {
            <option>{{product}}</option>
        }
    </select>

    <label for="quantity-select">Quantity</label>
    <select id="quantity-select" [(ngModel)]="quantity">
        @for (product of [0, 1, 2, 3]; track $index) {
            <option>{{product}}</option>
        }
    </select>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoWayBindingComponent {
    products = ['Hammer', 'Wrench', 'Screwdriver'];

    product = signal('')

    quantity = linkedSignal({
        source: this.product,
        computation: () => 0
    })
}
