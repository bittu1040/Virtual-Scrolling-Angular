import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Observable, of } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-mat-table-virtual-scroll',
  standalone: true,
  imports: [MatTableModule, ScrollingModule, CommonModule],
  templateUrl: './mat-table-virtual-scroll.component.html',
  styleUrl: './mat-table-virtual-scroll.component.scss'
})
export class MatTableVirtualScrollComponent {

  numberOfElements = 1000;
  randomElements = this.generateRandomElements(this.numberOfElements);


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1 = this.randomElements;
  
  dataSource2: Observable<PeriodicElement[]>;
  dataSource3: Observable<PeriodicElement[]>;

  dataSource4 = new MatTableDataSource<PeriodicElement>();

  constructor() {
    this.dataSource2 = of(new Array(100).fill({ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' }) as PeriodicElement[] );
    this.dataSource3 = of(Array.from({ length: 1000 }).map((_, index) => ({
      position: index + 1,
      name: `Element ${index + 1}`,
      weight: Math.random() * 20,
      symbol: `S${index + 1}`
    }))
    );

    const data: PeriodicElement[]= new Array(100).fill({
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H'
    });

    const dataObservable= of(data);

    dataObservable.subscribe((dataFromObservable: PeriodicElement[]) => {
      this.dataSource4.data = dataFromObservable;
    });

  }

  ngOnInit() {

  }





  generateRandomElements(numElements: number): PeriodicElement[] {
    const elements: PeriodicElement[] = [];
    const names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon'];
    const symbols = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne'];

    for (let i = 1; i <= numElements; i++) {
      const randomNameIndex = Math.floor(Math.random() * names.length);
      const randomSymbolIndex = Math.floor(Math.random() * symbols.length);

      const element: PeriodicElement = {
        position: i,
        name: names[randomNameIndex],
        weight: Math.random() * 20, // Generating random weight (you can adjust the range)
        symbol: symbols[randomSymbolIndex]
      };

      elements.push(element);
    }

    return elements;
  }

}
