import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Injector,
    Input,
    Signal,
  } from '@angular/core';
  import {
    FormControl,
    FormControlState,
    FormGroup,
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
  } from '@angular/forms';
  import { AsyncPipe, JsonPipe } from '@angular/common';
import { allEventsSignal, FormEventData } from '../../form-events';

  
  @Component({
    selector: 'app-child-instantiate-and-index',
    imports: [ReactiveFormsModule, JsonPipe, AsyncPipe],
    template: `
      <pre>child formVal(): {{formVal() | json}}</pre>
      <form>
          <input [formControl]="formCtrl" />
      </form>
      <pre>derived {{derivedValue() | json}}</pre>

      <form [formGroup]="formGrp">
        <input formControlName="name" type="text" />
        <input formControlName="age" type="number" />
      </form>
      <pre>{{formGrpVal() | json}}</pre>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class ChildInstantiateAndIndexComponent {
    #injectRef = inject(Injector);
    fb = inject(NonNullableFormBuilder);
  
    @Input()
    formCtrl = this.fb.control('')

    @Input()
    formGrp = this.fb.group({
        name: this.fb.control('', [Validators.required]),
        age: this.fb.control<null | number>(null),
    })
    formGrpVal!: Signal<FormEventData<{
        name: string;
        age: number | null;
    }>>;

    formVal!: Signal<FormEventData<string>>;
    derivedValue = computed(() => this.formVal().value);
  
    ngOnInit() {
      this.formVal = allEventsSignal<string>(this.formCtrl, this.#injectRef);
      this.formGrpVal = allEventsSignal<{
        name: string;
        age: number | null;
    }>(this.formGrp, this.#injectRef)
    }
  }
  