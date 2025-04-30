import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TieredMenuModule } from '@jacobg213/primeng-17/tieredmenu';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BadgeModule } from '@jacobg213/primeng-17/badge';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { PopupDoc } from './popupdoc';
import { TemplateDoc } from './templatedoc';
import { CommandDoc } from './commanddoc';
import { RouterDoc } from './routerdoc';
import { StyleDoc } from './styledoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { MessageService } from '@jacobg213/primeng-17/api';
import { FloatLabelModule } from '@jacobg213/primeng-17/floatlabel';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TieredMenuModule, ButtonModule, AppDocModule, BadgeModule, ToastModule, FloatLabelModule],
    declarations: [BasicDoc, ImportDoc, PopupDoc, StyleDoc, AccessibilityDoc, TemplateDoc, CommandDoc, RouterDoc],
    exports: [AppDocModule],
    providers: [MessageService]
})
export class TieredMenuDocModule {}
