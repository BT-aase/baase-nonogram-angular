import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})

export class DialogBodyComponent implements OnInit {

  data: string;

  constructor( 
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) data: string ){
      this.data = data;
    }

  addLife() {
    this.dialogRef.close('addLife')
  }

  restart() {
    this.dialogRef.close('restart');
  }

  continue() {
    this.dialogRef.close('continue');
  }
  
  ngOnInit(): void {
  }

}
