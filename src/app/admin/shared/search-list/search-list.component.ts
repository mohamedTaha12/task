import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../../main/tasks-admin/services/tasks.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  searchForm!: FormGroup
  users: any = [
    { name: "Mohamed", id: '651b9ee7db0a1cd83fafbccd' },
    { name: "Omar", id: '651b9f0edb0a1cd83fafbcd0' },
  ]
  status: any = [
    { name: "Complete", id: 1 },
    { name: "In-Progress", id: 2 },
  ]
  filterations: any = {}
  constructor(
    private dialog: MatDialogRef<SearchListComponent>,
    private tasksService: TasksService,
    private fb: FormBuilder

  ) { }
  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.searchForm = this.fb.group({
      title: [''],
      user: [''],
      status: [''],
      dateStart: [''],
      dateEnd: ['']
    })
  }
  close() {
    this.dialog.close()
  }
  // getAllTasks() {
  //   this.tasksService.getAllTasks(this.filterations).subscribe(res => {
  //     console.log(res)
  //     this.dialog.close(true)
  //   })
  // }
  search() {
    this.filterations['keyword'] = this.searchForm.value.title ? this.searchForm.value.title : ''
    this.filterations['userId'] = this.searchForm.value.user ? this.searchForm.value.user : ''
    this.filterations['status'] = this.searchForm.value.status ? this.searchForm.value.status : ''
    this.filterations['fromDate'] = this.searchForm.value.dateStart ? moment(this.searchForm.value.dateStart).format('DD-MM-YYYY') : ''
    this.filterations['toDate'] = this.searchForm.value.dateEnd ? moment(this.searchForm.value.dateEnd).format('DD-MM-YYYY') : ''
    console.log(this.filterations)
    this.dialog.close(this.filterations)
    // this.tasksService.getAllTasks(this.filterations).subscribe(res => {
    //   console.log(res)
    //   this.dialog.close(true)
    // })
  }
  // searchByTitle(ele: any) {
  //   this.filterations['keyword'] = ele.value
  //   setTimeout(() => {
  //     this.getAllTasks()
  //   }, 2000);
  // }
  // searchByUser(ele: any) {
  //   this.filterations['userId'] = ele.value
  //   this.getAllTasks()
  // }
  // searchByStatus(ele: any) {
  //   this.filterations['status'] = ele.value
  //   this.getAllTasks()
  // }
  // searchByDate(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
  //   this.filterations['fromDate'] = moment(dateRangeStart.value).format('DD-MM-YYYY')
  //   this.filterations['toDate'] = moment(dateRangeEnd.value).format('DD-MM-YYYY')
  // }

}
