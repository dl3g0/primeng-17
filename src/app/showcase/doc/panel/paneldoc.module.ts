import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelModule } from '@jacobg213/primeng-17/panel';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AvatarModule } from '@jacobg213/primeng-17/avatar';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { MenuModule } from '@jacobg213/primeng-17/menu';
import { StyleDoc } from './styledoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { TemplateDoc } from './templatedoc';
import { ToggleableDoc } from './toggleabledoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PanelModule, RouterModule, AvatarModule, ButtonModule, MenuModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, ToggleableDoc, TemplateDoc, StyleDoc, AccessibilityDoc]
})
export class PanelDocModule {}
