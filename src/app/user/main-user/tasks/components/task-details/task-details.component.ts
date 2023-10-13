import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogModel, ConfirmMsgComponent } from 'src/app/admin/shared/confirm-msg/confirm-msg.component';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  item: any
  taskId: string = ''
  constructor(
    private tasksServices: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private tasksService: TasksService,
    private messageService: MessageService
  ) {

    console.log(this.route.params.subscribe(res => {
      this.taskId = res['id']
      console.log(this.taskId)
    }))
  }



  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    this.tasksServices.getDetails(this.taskId).subscribe((res: any) => {
      this.item = res.tasks
      console.log(this.item)
    })
  }
  complate(ele: any) {
    const message = `Are you sure you want to Complete ` + ele.title + ` task ?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmMsgComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const model = {
          id: ele._id
        }
        this.tasksService.completeTask(model).subscribe(res => {
          this.router.navigate(['/user/main/tasks/list'])
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task completed successfuly' });
        })
      }
    });

  }

}
