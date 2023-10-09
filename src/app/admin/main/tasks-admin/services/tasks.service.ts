import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddTaskDto } from 'src/app/admin/core/models/add-task-dto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient
  ) { }
  getAllTasks(filter: any) {
    let params = new HttpParams()
    // if (filter.keyword) {
    //   params = params.append('keyword', filter.keyword)
    // } else if (filter.userId) {
    //   params = params.append('userId', filter.userId)
    // } else if (filter.status) {
    //   params = params.append('status', filter.status)
    // } else if (filter.fromDate && filter.toDate) {
    //   params = params.append('fromDate', filter.fromDate).append('toDate', filter.toDate)
    // }
    Object.entries(filter).forEach(([key, value]: any) => {
      if (value) {
        params = params.append(key, value)
      }
      return params
    })
    return this.http.get(environment.baseUrl + 'tasks/all-tasks', { params })
  }
  createTask(model: any) {
    return this.http.post(environment.baseUrl + 'tasks/add-task', model)
  }
  deleteTask(id: number) {
    return this.http.delete(environment.baseUrl + 'tasks/delete-task/' + id)
  }
  updateTask(id: number, model: any) {
    return this.http.put(environment.baseUrl + 'tasks/edit-task/' + id, model)
  }
}
