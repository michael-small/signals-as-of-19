import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChildInstantiateAndIndexComponent } from './child-instantiate-and-index.component';
import { ChildCvaComponent } from './child-cva.component';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
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

    <hr />
    <form>
        <app-child-instantiate-and-index [formGrp]="formGrp" />
    </form>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
    fb = inject(NonNullableFormBuilder);
    myControl = new FormControl('a', {nonNullable: true});
    formVal = allEventsSignal(this.myControl)

    formGrp = this.fb.group({
        name: this.fb.control('', [Validators.required]),
        age: this.fb.control<null | number>(null),
    })

    ngOnInit() {
        this.myControl.setValue('b')
    }
}
