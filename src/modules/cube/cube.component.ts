import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {

  public text: string = 'cube';

  @Input() color: string;
  @Output() updated: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update(event) {
    this.updated.emit({isUpdated: true, event});
  }

}
