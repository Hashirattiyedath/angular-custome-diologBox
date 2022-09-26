import { DialogService } from './service/dialog.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diologueBox';

  constructor(private diologService : DialogService) {}

  yesNoDialog() {
    const data = {
      title: 'Are you sure ?',
      message: 'Are you sure you want to do this?',
      confirmText: 'Yes',
      cancelText: 'No'
    }
    this.diologService.openDialog(data).afterClosed().subscribe(resp => {
        console.log(resp)
    })
  }

  confirmCancelDialog() {
    const data = {
      title: 'Are you sure?',
      message: 'Are you sure you want to do this?',
      confirmText: 'Confirm',
      cancelText: 'Cancel'
    }
    this.diologService.openDialog(data)
  }

}


