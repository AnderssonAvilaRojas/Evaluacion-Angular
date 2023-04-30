import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CafesComponent } from './cafes.component';
import { CafesListComponent } from './cafes-list/cafes-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [CafesListComponent ],
  declarations: [CafesListComponent ]
})
export class CafesModule { }
