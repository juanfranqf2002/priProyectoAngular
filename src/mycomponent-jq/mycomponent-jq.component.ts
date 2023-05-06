import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mycomponent-jq',
  templateUrl: './mycomponent-jq.component.html',
  standalone: true,
  styleUrls: ['./mycomponent-jq.component.css'],
})
export class MycomponentJQComponent implements OnInit {
  @Input() name = 'Juan';
  @Output() onChildEvent = new EventEmitter<string>();
  onClick() {
    this.onChildEvent.emit('Hello from child!');
  }

  constructor() {}

  ngOnInit() {}
}
