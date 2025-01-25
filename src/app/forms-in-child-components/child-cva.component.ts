import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child-cva',
  imports: [],
  template: `
    <p>
      TODO
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildCvaComponent {

}
