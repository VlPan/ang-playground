import { MessageComponent } from './message/message.component';
import { CheckboxComponent } from './../../components/checkbox/checkbox.component';
import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit, ContentChild, ContentChildren, QueryList, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit, AfterContentInit, AfterViewInit {

  public text: string = 'cube';

  @Input() color: string;
  @Output() updated: EventEmitter<any> = new EventEmitter();
  @ContentChildren(CheckboxComponent) checkbox: QueryList<CheckboxComponent>;
  @ViewChild(MessageComponent) message: MessageComponent
  @ViewChild('text') textDiv: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.textDiv);
    setTimeout(() => {
      this.message.message = 'NEW MESSAGE'
    })
  }

  ngAfterContentInit() {
    this.checkbox.forEach(element => {
      element.checked.subscribe((isChecked) => {
        this.color = isChecked ? 'red': 'blue';
      });
    });
  }

  update(event) {
    this.updated.emit({isUpdated: true, event});
  }

}
