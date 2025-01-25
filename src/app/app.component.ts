import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { ParentComponent } from "./forms-in-child-components/parent.component";
import { ParentFormArrayComponent } from "./forms-in-child-components/parent-form-array.component";

@Component({
  selector: 'app-root',
  template: ` <app-parent-form-array />`,
  imports: [LinkedSignalComponent, ParentComponent, ParentFormArrayComponent],
})
export class AppComponent {
  title = 'signals-as-of-19';
}
