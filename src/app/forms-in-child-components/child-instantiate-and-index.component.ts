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
    ReactiveFormsModule,
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
    `,
    styles: ``,
    standalone: true,
  })
  export class ChildInstantiateAndIndexComponent {
    #injectRef = inject(Injector);
  
    @Input()
    formCtrl = new FormControl('', { nonNullable: true });
  
    formVal!: Signal<FormEventData<string>>;
    derivedValue = computed(() => this.formVal().value);
  
    ngOnInit() {
      this.formVal = allEventsSignal<string>(this.formCtrl, this.#injectRef);
    }
  }
  