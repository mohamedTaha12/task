import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ConfirmDialogModel, ConfirmMsgComponent } from 'src/app/admin/shared/confirm-msg/confirm-msg.component';

@Component({
  selector: 'app-side-bar-user',
  templateUrl: './side-bar-user.component.html',
  styleUrls: ['./side-bar-user.component.scss']
})
export class SideBarUserComponent implements OnInit {
  public sidebarShow: boolean = false;
  sidenavWidth = 4;
  ngStyle!: string;
  collapsedNav!: boolean;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private translateService: TranslateService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    console.log(this.router.url)
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit() {
  }

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }
  logout() {
    const message = `Are you sure you want to Logout ?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmMsgComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        localStorage.removeItem('token')
        this.router.navigate(['user/login'])
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logout successfuly' });
      }
    });
  }
}
