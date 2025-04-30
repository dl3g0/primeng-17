import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { FormsModule } from '@angular/forms';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { FloatLabelModule } from '@jacobg213/primeng-17/floatlabel';
import { InputTextModule } from '@jacobg213/primeng-17/inputtext';
import { AccessibilityDoc } from './accessibilitydoc';
import { StyleDoc } from './styledoc';
@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, FloatLabelModule, InputTextModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class FloatLabelDocModule {}
