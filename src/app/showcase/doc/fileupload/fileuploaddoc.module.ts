import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from '@jacobg213/primeng-17/fileupload';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { TagModule } from '@jacobg213/primeng-17/tag';
import { ProgressBarModule } from '@jacobg213/primeng-17/progressbar';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { AutoDoc } from './autodoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { BadgeModule } from '@jacobg213/primeng-17/badge';

@NgModule({
    imports: [CommonModule, FormsModule, AppCodeModule, AppDocModule, ButtonModule, TagModule, ProgressBarModule, ToastModule, FileUploadModule, BadgeModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, StyleDoc, AdvancedDoc, AutoDoc, AccessibilityDoc]
})
export class FileUploadDocModule {}
