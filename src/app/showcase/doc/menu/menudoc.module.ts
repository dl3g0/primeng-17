import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from '@jacobg213/primeng-17/avatar';
import { BadgeModule } from '@jacobg213/primeng-17/badge';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { MenuModule } from '@jacobg213/primeng-17/menu';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CommandDoc } from './commanddoc';
import { TemplateDoc } from './templatedoc';
import { GroupDoc } from './groupdoc';
import { ImportDoc } from './importdoc';
import { RouterDoc } from './routerdoc';
import { PopupDoc } from './popupdoc';
import { StyleDoc } from './styledoc';
import { RippleModule } from '@jacobg213/primeng-17/ripple';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenuModule, ToastModule, ButtonModule, RippleModule, AvatarModule, AppDocModule, BadgeModule],
    declarations: [BasicDoc, CommandDoc, TemplateDoc, GroupDoc, ImportDoc, RouterDoc, PopupDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MenuDocModule {}
