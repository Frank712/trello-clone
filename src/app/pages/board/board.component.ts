import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column, ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent implements OnInit {
  columns: Column[] = [
    {
      title: 'To do',
      todos: [
        {
          id: '1',
          title: 'Exercise',
        },
        {
          id: '2',
          title: 'Learn English',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Learn Angular',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Read a book',
        },
      ],
    },
  ];
  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];
  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<ToDo[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }
}
