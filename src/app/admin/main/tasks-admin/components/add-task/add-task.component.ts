import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import * as moment from 'moment';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  formData!: FormGroup
  fileName!: string
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialog: MatDialogRef<AddTaskComponent>,
    public matDialog: MatDialog,
    private tasksService: TasksService,
    private confirmationService: ConfirmationService,
  ) { }

  users: any = [
    { name: "Mohamed", id: '651b9ee7db0a1cd83fafbccd' },
    { name: "Omar", id: '651b9f0edb0a1cd83fafbcd0' },
  ]
  ngOnInit(): void {
    console.log(this.data)
    this.createForm()
  }
  createForm() {
    this.formData = this.fb.group({
      title: [this.data?.title || '', [Validators.required]],
      userId: [this.data?.userId?._id || '', [Validators.required]],
      image: [this.data?.image || '', [Validators.required]],
      description: [this.data?.description || '', [Validators.required]],
      deadline: [this.data ? new Date(this.data?.deadline.split('-').reverse().join('-')).toISOString() : '', [Validators.required]]
    })
  }

  selectImage(event: any) {
    this.fileName = event?.target.value
    this.formData.get('image')?.setValue(event?.target?.files[0])
    console.log(event?.target?.files[0])
  }
  createTask(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to Create Task?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let model = this.prepeareFormData()
        this.tasksService.createTask(model).subscribe(res => {
          this.dialog.close(true)
        })
      }
    });
  }
  updateTask(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to Update Task?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let model = this.prepeareFormData()
        this.tasksService.updateTask(this.data._id, model).subscribe(res => {
          this.dialog.close(true)
        })
      }
    });
  }
  close(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to Close Task?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dialog.close()
      }
    });
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
