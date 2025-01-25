import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';

@Component({
  selector: 'app-root',
  template: `<app-linked-signal />`,
  imports: [LinkedSignalComponent],
})
export class AppComponent {
  title = 'signals-as-of-19';
}
