import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();
  initted: boolean = false;

  constructor() { }

  onChecked(isCheked: boolean) {
    this.checked.emit(isCheked);
  }

  ngOnInit() {
    this.initted = true;
  }

}
