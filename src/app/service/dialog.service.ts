import { ConfirmComponent } from './../dialogs/confirm/confirm.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogData } from '../interface/dialog.interface';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(data: ConfirmDialogData) {
    return this.dialog.open(ConfirmComponent, {
      disableClose: true,
      width: '400px',
      data: data,
      autoFocus: false
      // position: {top: '10px'}
    });
  }
}
