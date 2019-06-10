import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataTableComponent } from './data-table/data-table.component';
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingTableComponent } from './shopping-table/shopping-table.component';


@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent,
        DataTableComponent,    
        ShoppingTableComponent    
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