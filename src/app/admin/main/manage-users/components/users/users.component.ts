import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { UsersService } from '../../services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmDialogModel, ConfirmMsgComponent } from 'src/app/admin/shared/confirm-msg/confirm-msg.component';
export interface PeriodicElement {
  name: string;
  email: string;
  tasksAssigned: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', email: "1.0079", tasksAssigned: "10-11-2022" },
  { name: 'Helium', email: "4.0026", tasksAssigned: "10-11-2022" },
  { name: 'Lithium', email: "6.941", tasksAssigned: "10-11-2022" },
  { name: 'Beryllium', email: "9.0122", tasksAssigned: "10-11-2022" },
  { name: 'Boron', email: "10.811", tasksAssigned: "10-11-2022" },
  { name: 'Carbon', email: "12.010", tasksAssigned: "10-11-2022" },
  { name: 'Nitrogen', email: "14.006", tasksAssigned: "10-11-2022" },
  { name: 'Oxygen', email: "15.999", tasksAssigned: "10-11-2022" },
  { name: 'Fluorine', email: "18.998", tasksAssigned: "10-11-2022" },
  { name: 'Neon', email: "20.179", tasksAssigned: "10-11-2022" },
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  items!: MenuItem[];
  displayedColumns: string[] = ['username', 'email', 'assignedTasks', 'status', 'actions'];
  dataSource: any;
  tasksFilter!: FormGroup;
  filterations: any = {}
  itemsBreadCrumb!: MenuItem[];
  home!: MenuItem;

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
    private usersService: UsersService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  // CONFIRM MSG


  createform() {
    this.tasksFilter = this.fb.group({
      title: [''],
      userId: [''],
      fromDate: [''],
      toDate: ['']
    })
  }

  getAllUsers() {
    this.usersService.getAllUsers().subscribe((res: any) => {
      console.log(res)
      this.dataSource = res.users
    })
  }

  // addTask() {
  //   const dialogRef = this.dialog.open(AddTaskComponent, {
  //     width: '750px',
  //     disableClose: true
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.getAllTasks()
  //       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task created successfuly' });
  //     }
  //   })
  // }

  // ACTION ON TASKES DELETE AND UPDATE


  // deleteUser(ele: any) {
  //   console.log(ele)
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to Delete ' + ele.username + ` user ?`,
  //     header: 'Delete Confirmation',
  //     icon: 'pi pi-info-circle',
  //     accept: () => {
  //       this.usersService.deleteUser(ele._id).subscribe(res => {
  //         this.getAllUsers()
  //         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User deleted successfuly' });
  //       })
  //     }
  //   })
  // }

  deleteUser(ele: any): void {
    const message = `Are you sure that you want to Delete user ` + ele.username + ` ?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmMsgComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.usersService.deleteUser(ele._id).subscribe(res => {
          this.getAllUsers()
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User deleted successfuly' });
        })
      }
    });
  }



  // getMenuItemsForItem(item: any): MenuItem[] {
  //   const context = item;
  //   return [
  //     { label: 'Update', icon: 'pi pi-refresh', command: e => this.updateTask(item) },
  //     { label: 'Delete', icon: 'pi pi-fw pi-trash', command: e => this.deleteTask(item._id) }
  //   ]
  // }

  // updateTask(element: any) {
  //   const dialogRef = this.dialog.open(AddTaskComponent, {
  //     width: '650px',
  //     data: element,
  //     disableClose: true
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task updated successfuly' });
  //       this.getAllTasks()
  //     }
  //   })
  // }



  // SEAERCH
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
  //   if (dateRangeEnd.value) {
  //     this.getAllTasks()
  //   }
  // }
  // openSearchDialog() {
  //   const dialogRef = this.dialog.open(SearchListComponent, {
  //     width: '400px',
  //     // disableClose: true
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.filterations = result
  //     this.getAllTasks()
  //   })
  // }



}
