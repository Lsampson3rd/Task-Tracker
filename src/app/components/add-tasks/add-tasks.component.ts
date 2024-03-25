import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css'
})
export class AddTasksComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if(!this.text) {
      alert('Plese add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.text = '';
    this.day = '';
    this.reminder = false;
    this.onAddTask.emit(newTask);
  }
}
