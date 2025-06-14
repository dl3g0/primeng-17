import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { KnobModule } from '@dl3g0/primeng/knob';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@dl3g0/primeng/button';
import { MinMaxDoc } from './minmaxdoc';
import { StepDoc } from './stepdoc';
import { TemplateDoc } from './templatedoc';
import { StrokeDoc } from './strokedoc';
import { SizeDoc } from './sizedoc';
import { ColorDoc } from './colordoc';
import { ReadonlyDoc } from './readonlydoc';
import { DisabledDoc } from './disableddoc';
import { StyleDoc } from './styledoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { ReactiveDoc } from './reactivedoc';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ButtonModule, AppCodeModule, AppDocModule, KnobModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MinMaxDoc, StepDoc, TemplateDoc, StrokeDoc, SizeDoc, ColorDoc, ReadonlyDoc, DisabledDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, ReactiveDoc]
})
export class KnobDocModule {}
