import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MultiSelectModule } from '@dl3g0/primeng/multiselect';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ChipsDoc } from './chipsdoc';
import { DisabledDoc } from './disableddoc';
import { FilterDoc } from './filterdoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { GroupDoc } from './groupdoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { VirtualScrollDoc } from './virtualscrolldoc';
import { LoadingStateDoc } from './loadingstatedoc';
import { FloatLabelModule } from '@dl3g0/primeng/floatlabel';
import { FilledDoc } from './filleddoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MultiSelectModule, FormsModule, ReactiveFormsModule, AppDocModule, FloatLabelModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, ChipsDoc, GroupDoc, FilterDoc, TemplateDoc, VirtualScrollDoc, FloatLabelDoc, InvalidDoc, DisabledDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, LoadingStateDoc, FilledDoc]
})
export class MultiSelectDocModule {}
