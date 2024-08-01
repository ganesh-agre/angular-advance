import { Component } from '@angular/core';

@Component({
  selector: 'my-for-component',
  template: `<ul>
    <li *myFor="let item of items; let i = index">{{ i }}: {{ item?.name }}</li>
  </ul> `,
})
export class MyForComponent {
  items = [
    {
      name: 'Ganesh',
      age: 11,
    },
    {
      name: 'Ramesh',
      age: 12,
    },
    {
      name: 'Suresh',
      age: 13,
    },
  ];
}
