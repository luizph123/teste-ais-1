import { Component, OnInit } from '@angular/core';
import { Card } from '../utils/models/pokemon';
import { DataService } from '../utils/services/data.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalAtacksComponent } from './modal-atacks/modal-atacks.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  data: Card;
  url: string;

  constructor(private service: DataService, public dialog: MatDialog) {
    this.service.data.subscribe((res: Card) => {
      this.data = res;
      this.url = res.imageUrlHiRes;
    });
  }

  ngOnInit(): void {}

  openAttack(atk: any) {
    const dialogRef = this.dialog.open(ModalAtacksComponent, {
      data: atk,
    });
  }
}
