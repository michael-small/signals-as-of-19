import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `test`,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'signals-as-of-19';
}
