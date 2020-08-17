import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  cost: [string];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

export interface Cost {
  type: string;
  multiplier: number;
}

@Component({
  selector: 'app-modal-atacks',
  templateUrl: './modal-atacks.component.html',
  styleUrls: ['./modal-atacks.component.scss'],
})
export class ModalAtacksComponent implements OnInit {
  multipliers = [];
  manas = [];
  costs: Cost[];

  constructor(
    public dialogRef: MatDialogRef<ModalAtacksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.costSort(this.data.cost);
  }

  ngOnInit(): void {
    
  }

  costSort(attacks) {
    let prev;

    attacks.sort();
    for (let i = 0; i < attacks.length; i++) {
      if (attacks[i] !== prev) {
        this.manas.push(attacks[i]);
        this.multipliers.push(1);
      } else {
        this.multipliers[this.multipliers.length - 1]++;
      }
      prev = attacks[i];
    }
  }

}
