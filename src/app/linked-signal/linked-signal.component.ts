import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { FormDefaultsFromServerComponent } from './form-defaults-from-server.component';

@Component({
  selector: 'app-linked-signal',
  imports: [TwoWayBindingComponent, FormDefaultsFromServerComponent],
  template: `
    <app-two-way-binding />
    <app-form-defaults-from-server />
  `,
  styles: `
    :host {
        display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkedSignalComponent {

}
