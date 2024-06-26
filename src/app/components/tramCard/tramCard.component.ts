import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject
} from '@angular/core';
import { Tram } from '../../models/tram.type';
import { Store } from '@ngxs/store';
import { AddTramToCart } from '../../state/cart/cart.actions';

@Component({
  selector: 'app-tram-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tramCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TramCardComponent {
  @Input() declare tram: Tram;

  private readonly store = inject(Store);

  addToCart(): void {
    this.store.dispatch(new AddTramToCart(this.tram));
  }
}
