import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from "../tasks-item/tasks-item.component";
import { AddTasksComponent } from "../add-tasks/add-tasks.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    providers: [TaskService],
    styleUrl: './tasks.component.css',
    imports: [CommonModule, TasksItemComponent, AddTasksComponent]
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
    console.log('Delete Task: ', task.id)
  }

  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) =>(this.tasks.push(task)));
  }

}
