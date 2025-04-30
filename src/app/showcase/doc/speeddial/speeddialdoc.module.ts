import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesModule } from '@jacobg213/primeng-17/messages';
import { SpeedDialModule } from '@jacobg213/primeng-17/speeddial';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { TooltipModule } from '@jacobg213/primeng-17/tooltip';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { CircleDoc } from './circledoc';
import { CustomDoc } from './customdoc';
import { ImportDoc } from './importdoc';
import { LinearDoc } from './lineardoc';
import { MaskDoc } from './maskdoc';
import { QuarterCircleDoc } from './quartercircledoc';
import { SemiCircleDoc } from './semicircledoc';
import { StyleDoc } from './styledoc';
import { TooltipDoc } from './tooltipdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SpeedDialModule, MessagesModule, ToastModule, TooltipModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, LinearDoc, CircleDoc, SemiCircleDoc, QuarterCircleDoc, TooltipDoc, MaskDoc, CustomDoc, StyleDoc, AccessibilityDoc]
})
export class SpeedDialDocModule {}
