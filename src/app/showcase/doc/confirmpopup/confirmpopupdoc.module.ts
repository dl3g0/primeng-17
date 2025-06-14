import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmPopupModule } from '@dl3g0/primeng/confirmpopup';
import { ButtonModule } from '@dl3g0/primeng/button';
import { ToastModule } from '@dl3g0/primeng/toast';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';
import { ConfirmationApiDoc } from './confirmationapidoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { TemplateDoc } from './templatedoc';
import { TemplatesDoc } from './templatesdoc';
import { HeadlessDoc } from './headlessdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, ConfirmPopupModule, ButtonModule, ToastModule, AppDocModule],
    declarations: [BasicDoc, ImportDoc, PropsDoc, StyleDoc, ConfirmationApiDoc, AccessibilityDoc, TemplatesDoc, TemplateDoc, HeadlessDoc],
    exports: [AppDocModule]
})
export class ConfirmPopupDocModule {}
