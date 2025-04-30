import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { MeterGroupModule } from '@jacobg213/primeng-17/metergroup';
import { MultipleDoc } from './multipledoc';
import { IconDoc } from './icondoc';
import { LabelDoc } from './labeldoc';
import { StyleDoc } from './styledoc';
import { VerticalDoc } from './verticaldoc';
import { MinMaxDoc } from './minmaxdoc';
import { TemplateDoc } from './templatedoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { CardModule } from '@jacobg213/primeng-17/card';
@NgModule({
    imports: [CommonModule, AppCodeModule, FormsModule, RouterModule, ButtonModule, AppDocModule, MeterGroupModule, CardModule],
    declarations: [BasicDoc, ImportDoc, MultipleDoc, IconDoc, LabelDoc, VerticalDoc, MinMaxDoc, TemplateDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MeterGroupDocModule {}
