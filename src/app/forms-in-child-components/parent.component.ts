import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildInstantiateAndIndexComponent } from './child-instantiate-and-index.component';
import { ChildCvaComponent } from './child-cva.component';
import { FormControl } from '@angular/forms';
import { allEventsSignal } from '../../form-events';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildInstantiateAndIndexComponent, JsonPipe],
  template: `
    <pre>parent formVal(): {{formVal() | json}}</pre>

    <form>
        <app-child-instantiate-and-index [formCtrl]="myControl" />
    </form>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
    myControl = new FormControl('a', {nonNullable: true});

    formVal = allEventsSignal(this.myControl)

    ngOnInit() {
        this.myControl.setValue('b')
    }
}
