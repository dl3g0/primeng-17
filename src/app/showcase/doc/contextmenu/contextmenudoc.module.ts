import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContextMenuModule } from '@jacobg213/primeng-17/contextmenu';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DocumentDoc } from './documentdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { CommandDoc } from './commanddoc';
import { TagModule } from '@jacobg213/primeng-17/tag';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { RouterDoc } from './routerdoc';
import { TableDoc } from './tabledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, ContextMenuModule, AppDocModule, TagModule, ToastModule],
    declarations: [BasicDoc, ImportDoc, DocumentDoc, TemplateDoc, CommandDoc, RouterDoc, TableDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ContextMenuDocModule {}
