import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { SplitButtonModule } from '@jacobg213/primeng-17/splitbutton';
import { InputTextModule } from '@jacobg213/primeng-17/inputtext';
import { AvatarModule } from '@jacobg213/primeng-17/avatar';
import { ToolbarModule } from '@jacobg213/primeng-17/toolbar';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ToolbarModule, RouterModule, ButtonModule, SplitButtonModule, InputTextModule, AvatarModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, StyleDoc, AccessibilityDoc]
})
export class ToolbarDocModule {}
