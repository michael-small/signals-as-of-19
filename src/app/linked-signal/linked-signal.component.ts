import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TwoWayBindingComponent } from './two-way-binding.component';

@Component({
  selector: 'app-linked-signal',
  imports: [TwoWayBindingComponent],
  template: `
    <app-two-way-binding />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkedSignalComponent {

}
