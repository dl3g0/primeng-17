import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { AutoFocusModule } from '@jacobg213/primeng-17/autofocus';
import { InputTextModule } from '@jacobg213/primeng-17/inputtext';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, AutoFocusModule, InputTextModule],
    declarations: [ImportDoc, BasicDoc],
    exports: [AppDocModule]
})
export class AutoFocusDocModule {}
