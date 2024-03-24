import { Component, Input } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {
  @Input() task!: Task

}
