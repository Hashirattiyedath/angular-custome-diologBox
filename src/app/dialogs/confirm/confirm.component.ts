import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from 'src/app/interface/dialog.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {

  // variables
  dialogData!: ConfirmDialogData;
  title: string = 'Are you sure ??????';
  message: string = 'Are you sure you want to do this ??????';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
    private dialogRef: MatDialogRef<ConfirmComponent>
  ) {}

  ngOnInit(): void {
    this.dialogData = this.data;
    this.title = this.dialogData.title ? this.dialogData.title : this.title;
    this.message = this.dialogData.message ? this.dialogData.message : this.message;
  }

  // We can also pass closed time value like this (click event)
  // closeDialog() {
  //   this.dialogRef.close(false)
  // }

  // confirmDialog() {
  //   this.dialogRef.close(true)
  // }
}
