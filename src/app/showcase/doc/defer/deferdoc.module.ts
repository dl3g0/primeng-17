import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeferModule } from '@jacobg213/primeng-17/defer';
import { TableModule } from '@jacobg213/primeng-17/table';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { DataTableDoc } from './datatabledoc';
import { ImportDoc } from './importdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, DeferModule, TableModule, ToastModule],
    exports: [ImportDoc, BasicDoc, DataTableDoc, AppDocModule],
    declarations: [ImportDoc, BasicDoc, DataTableDoc]
})
export class DeferDocModule {}
