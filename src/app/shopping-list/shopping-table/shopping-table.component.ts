import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-table',
  templateUrl: './shopping-table.component.html',
  styleUrls: ['./shopping-table.component.css']
})
export class ShoppingTableComponent implements OnInit {

  ingredients: Ingredient[];
  private subscription: Subscription;
  displayedColumns: string[] = ['name','amount'];
  dataSource : MatTableDataSource<Ingredient>;//ELEMENT_DATA
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  constructor(private slService: ShoppingListService) { 
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
          this.dataSource = new MatTableDataSource(this.ingredients);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;          
          console.log(this.ingredients);
        }
      );
    this.dataSource = new MatTableDataSource(this.ingredients);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //       this.dataSource = new MatTableDataSource(this.ingredients);
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //       console.log(this.ingredients);
    //     }
    //   );        
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  rowClick(ingre:Ingredient){
   // console.log(row.id+"Index");   
    let index:number=this.ingredients.findIndex(curr=>{
      return curr.name===ingre.name;
    });
    console.log(ingre.name+"Index hai"+index);
  this.slService.startedEditing.next(index);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
