import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient
  ) { }
  getUserTasks(id: string, taskParams: any) {
    let params = new HttpParams()
    Object.entries(taskParams).forEach(([key, value]: any) => {
      params = params.append(key, value)
    })
    return this.http.get(environment.baseUrl + "tasks/user-tasks/" + id, { params })
  }
  completeTask(model: Object) {
    return this.http.put(environment.baseUrl + "tasks/complete", model)
  }
}
