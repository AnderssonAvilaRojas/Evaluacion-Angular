import { Component, OnInit } from '@angular/core';
import {Cafe} from '../cafe'
import { CafesService } from '../cafes.service';

@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.css']
})
export class CafesListComponent implements OnInit {


  cafeslist: Array<Cafe> = [];
  constructor(private cafesService: CafesService) {}
  getCafes(): void {
    this.cafesService.getCafes().subscribe((cafeslist) => {
      this.cafeslist = cafeslist;
      console.log(this.cafeslist);
    });
  }


  ngOnInit(): void {
    this.getCafes();
  }
}
