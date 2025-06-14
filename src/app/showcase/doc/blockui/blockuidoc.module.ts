import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockUIModule } from '@dl3g0/primeng/blockui';
import { ButtonModule } from '@dl3g0/primeng/button';
import { PanelModule } from '@dl3g0/primeng/panel';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DocumentDoc } from './documentdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, PanelModule, ButtonModule, BlockUIModule],
    declarations: [ImportDoc, BasicDoc, DocumentDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class BlockUIDocModule {}
