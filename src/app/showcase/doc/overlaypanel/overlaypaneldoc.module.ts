import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from '@jacobg213/primeng-17/overlaypanel';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { TableModule } from '@jacobg213/primeng-17/table';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { DataTableDoc } from './datatabledoc';
import { TemplateDoc } from './templatedoc';
import { TargetDoc } from './targetdoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { InputGroupModule } from '@jacobg213/primeng-17/inputgroup';
import { InputGroupAddonModule } from '@jacobg213/primeng-17/inputgroupaddon';
import { ChipsModule } from '@jacobg213/primeng-17/chips';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, OverlayPanelModule, ButtonModule, TableModule, ToastModule, AppDocModule, InputGroupModule, InputGroupAddonModule, ChipsModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, DataTableDoc, TemplateDoc, TargetDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class OverlayPanelDocModule {}
