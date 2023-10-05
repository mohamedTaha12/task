import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import { AddTaskDto } from 'src/app/admin/core/models/add-task-dto';
import * as moment from 'moment';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  formData!: FormGroup
  fileName!: string
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<AddTaskComponent>,
    public matDialog: MatDialog,
    private tasksService: TasksService
  ) { }

  users: any = [
    { name: "Mohamed", id: '651b9ee7db0a1cd83fafbccd' },
    { name: "Omar", id: '651b9f0edb0a1cd83fafbcd0' },
  ]
  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.formData = this.fb.group({
      title: ['', [Validators.required]],
      userId: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      deadline: ['', [Validators.required]]
    })
  }

  selectImage(event: any) {
    this.fileName = event?.target.value
    this.formData.get('image')?.setValue(event?.target?.files[0])
    console.log(event?.target?.files[0])
  }
  createTask() {
    let model = this.prepeareFormData()
    this.tasksService.createTask(model).subscribe(res => {

    })
  }
  prepeareFormData() {
    let newDate = moment(this.formData.value['deadline']).format('DD-MM-YYYY')
    let formData = new FormData()
    Object.entries(this.formData.value).forEach(([key, value]: any) => {
      if (key == 'deadline') {
        formData.append(key, newDate)

      } else {
        formData.append(key, value)

      }
    })
    return formData
  }
}
