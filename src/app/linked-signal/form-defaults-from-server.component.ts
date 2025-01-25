import { ChangeDetectionStrategy, Component, computed, effect, linkedSignal, signal, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-form-defaults-from-server',
  imports: [FormsModule],
  template: `
    <form #formName="ngForm">
        <label for="first">First Name</label>
        <input name="first" [(ngModel)]="form.firstName" />
        <label for="last">Last Name</label>
        <input name="last" [(ngModel)]="form.lastName" required/>
    </form>

    <div>
        <pre>{{form.firstName()}} {{form.lastName()}}</pre>
        <button (click)="log()">log</button>
    </div>
  `,
    styles: `
    :host {
        display: flex;
        align-items: center;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDefaultsFromServerComponent {
    // From some store / service / call and in the end is a signal
    userProfileFromService = signal({
        firstName: '',
        lastName: ''
    })

    form = {
        firstName: linkedSignal(() => this.userProfileFromService().firstName),
        lastName: linkedSignal(() => this.userProfileFromService().lastName)
    }

    theForm = viewChild.required<NgForm>('formName')

    logVal = effect(() => {
        const theForm = this.theForm();
        theForm.valueChanges
    })

    log() {
        console.log(this.theForm())
        console.log(this.theForm().value)
    }

    ngOnInit() {
        this.theForm().statusChanges?.pipe(
            tap(console.log)
        ).subscribe()
    }
}
