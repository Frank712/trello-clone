import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'danger' | 'primary' | 'light' = 'primary';
  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
      'text-white': true,
    },
    danger: {
      'bg-danger-700': true,
      'hover:bg-danger-800': true,
      'focus:ring-danger-300': true,
      'text-white': true,
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white': true,
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-black': true,
      'hover:text-white': true,
    },
  };
  constructor() {}

  ngOnInit(): void {}

  get colors() {
    const colors = this.mapColors[this.color];
    return colors ? colors : {};
  }
}
