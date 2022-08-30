import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/servicios/ui.service';
import { Task } from '../task';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  
  text: string = '';
  date: string = '';
  reminder: boolean = false;
  showAddTask: boolean=false;
  subscription?:Subscription;

  constructor (private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length === 0){
      alert("Agregue una tarea");
      return
    }

    const{text, date, reminder} = this
    const newTask = {text, date, reminder}
    
    this.onAddTask.emit(newTask);
  }

 

}
