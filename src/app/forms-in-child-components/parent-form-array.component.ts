import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChildInstantiateAndIndexComponent } from './child-instantiate-and-index.component';
import { allEventsSignal } from '../../form-events';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-parent-form-array',
  imports: [ReactiveFormsModule, ChildInstantiateAndIndexComponent, JsonPipe],
  template: `
    <pre>parent {{formEventsState() | json}}</pre>

    @for (ctrl of myFormArray.controls; track $index) {
        <app-child-instantiate-and-index [formCtrl]="ctrl" />
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentFormArrayComponent {
    myFormArray = new FormArray([
        new FormControl('', {nonNullable: true, validators: [Validators.required]}),
        new FormControl('2', {nonNullable: true}),
        new FormControl('3', {nonNullable: true}),
    ])

    formEventsState = allEventsSignal<string>(this.myFormArray)
}
