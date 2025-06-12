import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from '@dl3g0/primeng/dialog';
import { DockModule } from '@dl3g0/primeng/dock';
import { GalleriaModule } from '@dl3g0/primeng/galleria';
import { MenubarModule } from '@dl3g0/primeng/menubar';
import { RadioButtonModule } from '@dl3g0/primeng/radiobutton';
import { TerminalModule } from '@dl3g0/primeng/terminal';
import { ToastModule } from '@dl3g0/primeng/toast';
import { TreeModule } from '@dl3g0/primeng/tree';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, DockModule, FormsModule, RadioButtonModule, MenubarModule, ToastModule, DialogModule, GalleriaModule, TerminalModule, TreeModule, AppDocModule],
    declarations: [AdvancedDoc, BasicDoc, ImportDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class DockDocModule {}
