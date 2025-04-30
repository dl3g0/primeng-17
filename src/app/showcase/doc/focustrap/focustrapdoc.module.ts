import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { InputTextModule } from '@jacobg213/primeng-17/inputtext';
import { DropdownModule } from '@jacobg213/primeng-17/dropdown';
import { FocusTrapModule } from '@jacobg213/primeng-17/focustrap';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, FocusTrapModule],
    declarations: [ImportDoc, BasicDoc],
    exports: [AppDocModule]
})
export class FocusTrapDocModule {}
