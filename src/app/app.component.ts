import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { ParentComponent } from "./forms-in-child-components/parent.component";

@Component({
  selector: 'app-root',
  template: ` <app-parent />`,
  imports: [LinkedSignalComponent, ParentComponent],
})
export class AppComponent {
  title = 'signals-as-of-19';
}
