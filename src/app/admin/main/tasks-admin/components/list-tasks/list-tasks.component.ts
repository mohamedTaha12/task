import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TasksService } from '../../services/tasks.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as moment from 'moment';

export interface PeriodicElement {
  title: string;
  user: string;
  deadline: string;
  status: string;
  description: string
}
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  displayedColumns: string[] = ['image', 'title', 'user', 'deadline', 'status', 'description', 'actions'];
  dataSource: any;
  tasksFilter!: FormGroup;
  filterations: any = {}
  users: any = [
    { name: "Mohamed", id: '651b9ee7db0a1cd83fafbccd' },
    { name: "Omar", id: '651b9f0edb0a1cd83fafbcd0' },
  ]

  status: any = [
    { name: "Complete", id: 1 },
    { name: "In-Progress", id: 2 },
  ]
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private tasksService: TasksService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    this.getAllTasks()
    this.createform()
  }

  createform() {
    this.tasksFilter = this.fb.group({
      title: [''],
      userId: [''],
      fromDate: [''],
      toDate: ['']
    })
  }

  getAllTasks() {
    this.tasksService.getAllTasks(this.filterations).subscribe((res: any) => {
      console.log(res)
      this.dataSource = this.mappingData(res.tasks)

    })
  }
  mappingData(data: any[]) {
    let newData = data.map(item => {
      return {
        ...item,
        user: item.userId?.username,
      }
    })
    console.log(newData)
    return newData
  }
  addTask() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllTasks()
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task created successfuly' });
      }
    })
  }

  // ACTION ON TASKES DELETE AND UPDATE


  deleteTask(event: Event, id: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to delete?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tasksService.deleteTask(id).subscribe(res => {
          this.getAllTasks()
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task deleted successfuly' });
        })
      }
    });
  }
  updateTask(element: any) {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '750px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task updated successfuly' });
        this.getAllTasks()
      }
    })
  }


  // SEAERCH
  searchByTitle(ele: any) {
    this.filterations['keyword'] = ele.value
    setTimeout(() => {
      this.getAllTasks()
    }, 2000);
  }
  searchByUser(ele: any) {
    this.filterations['userId'] = ele.value
    this.getAllTasks()
  }
  searchByStatus(ele: any) {
    this.filterations['status'] = ele.value
    this.getAllTasks()
  }
  searchByDate(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.filterations['fromDate'] = moment(dateRangeStart.value).format('DD-MM-YYYY')
    this.filterations['toDate'] = moment(dateRangeEnd.value).format('DD-MM-YYYY')
    if (dateRangeEnd.value) {
      this.getAllTasks()
    }
  }
}
