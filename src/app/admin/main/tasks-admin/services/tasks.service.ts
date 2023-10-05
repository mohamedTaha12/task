import { HttpClient } from '@angular/common/http';
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
  getAllTasks() {
    return this.http.get(environment.baseUrl + 'tasks/all-tasks')
  }
  createTask(model: any) {
    return this.http.post(environment.baseUrl + 'tasks/add-task', model)

  }
}
