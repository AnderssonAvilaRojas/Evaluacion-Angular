import { Component, OnInit } from '@angular/core';
import {Cafe} from '../cafe'
import { CafesService } from '../cafes.service';

@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.css']
})
export class CafesListComponent implements OnInit {

  totalBriend: number=0;
  totalOrigen: number=0;
  cafeslist: Array<Cafe> = [];
  constructor(private cafesService: CafesService) {}
  getCafes(): void {
    this.cafesService.getCafes().subscribe((cafeslist) => {
      this.cafeslist = cafeslist;

      console.log(this.cafeslist);
      for (const cafe of this.cafeslist){

        if(cafe.tipo=="Blend"){
          this.totalBriend+=1;
        }
        console.log("Total Briend"+this.totalBriend);
        if(cafe.tipo=="Café de Origen"){this.totalOrigen+=1;}

      }

    });
  }


  ngOnInit(): void {
    this.getCafes();
  }
}
