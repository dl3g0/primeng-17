import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from '@dl3g0/primeng/avatar';
import { BadgeModule } from '@dl3g0/primeng/badge';
import { ButtonModule } from '@dl3g0/primeng/button';
import { MenuModule } from '@dl3g0/primeng/menu';
import { ToastModule } from '@dl3g0/primeng/toast';
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
import { RippleModule } from '@dl3g0/primeng/ripple';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenuModule, ToastModule, ButtonModule, RippleModule, AvatarModule, AppDocModule, BadgeModule],
    declarations: [BasicDoc, CommandDoc, TemplateDoc, GroupDoc, ImportDoc, RouterDoc, PopupDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MenuDocModule {}
