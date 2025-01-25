import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reset',
  imports: [],
  template: `
    <p>
      reset works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetComponent {

}
