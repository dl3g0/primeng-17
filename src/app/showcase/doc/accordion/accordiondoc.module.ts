import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from '@dl3g0/primeng/accordion';
import { ButtonModule } from '@dl3g0/primeng/button';
import { AvatarModule } from '@dl3g0/primeng/avatar';
import { BadgeModule } from '@dl3g0/primeng/badge';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ControlledDoc } from './controlleddoc';
import { DisabledDoc } from './disableddoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { DynamicDoc } from './dynamicdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, AccordionModule, ButtonModule, RouterModule, AvatarModule, BadgeModule, FormsModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, DynamicDoc, MultipleDoc, DisabledDoc, ControlledDoc, TemplateDoc, StyleDoc, AccessibilityDoc]
})
export class AccordionDocModule {}
