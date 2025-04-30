import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from '@jacobg213/primeng-17/menubar';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { TemplateDoc } from './templatedoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { InputTextModule } from '@jacobg213/primeng-17/inputtext';
import { AccessibilityDoc } from './accessibilitydoc';
import { BadgeModule } from '@jacobg213/primeng-17/badge';
import { RippleModule } from '@jacobg213/primeng-17/ripple';
import { AvatarModule } from '@jacobg213/primeng-17/avatar';
import { CommandDoc } from './commanddoc';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { RouterDoc } from './routerdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenubarModule, InputTextModule, AppDocModule, BadgeModule, RippleModule, AvatarModule, ToastModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, TemplateDoc, CommandDoc, RouterDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MenubarDocModule {}
