import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTableComponent } from './data-table/data-table.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent,
        DataTableComponent,        
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,  
        MatFormFieldModule, 
        MatInputModule,   
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule                 
    ]
})
export class ShoppingListModule{}