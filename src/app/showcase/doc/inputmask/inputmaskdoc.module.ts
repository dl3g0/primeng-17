import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputMaskModule } from '@dl3g0/primeng/inputmask';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DisabledDoc } from './disableddoc';
import { FloatlabelDoc } from './floatlabeldoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { MaskDoc } from './maskdoc';
import { OptionalDoc } from './optionaldoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { SlotCharDoc } from './slotchardoc';
import { StyleDoc } from './styledoc';
import { FloatLabelModule } from '@dl3g0/primeng/floatlabel';
import { FilledDoc } from './filleddoc';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputMaskModule, RouterModule, AppCodeModule, AppDocModule, FloatLabelModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MaskDoc, SlotCharDoc, OptionalDoc, FloatlabelDoc, DisabledDoc, InvalidDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, FilledDoc]
})
export class InputMaskDocModule {}
