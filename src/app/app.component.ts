import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  cubeColor = 'blue';

  cubeUpdated($event) {
    const {isUpdated, event} = $event;
  }

  checkCube($event) {
    this.cubeColor = $event ? 'violet' : 'blue';
    console.log('isChecked', $event);
  }
}
