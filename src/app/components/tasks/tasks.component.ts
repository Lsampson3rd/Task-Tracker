import { Component } from '@angular/core';
import { TASKS } from '../../mock-task';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from "../tasks-item/tasks-item.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [CommonModule, TasksItemComponent]
})
export class TasksComponent {
  tasks: Task[] = TASKS

}
