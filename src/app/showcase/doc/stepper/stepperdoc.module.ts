import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepperModule } from '@dl3g0/primeng/stepper';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { ButtonModule } from '@dl3g0/primeng/button';
import { VerticalDoc } from './verticaldoc';
import { LinearDoc } from './lineardoc';
import { TemplateDoc } from './templatedoc';
import { PasswordModule } from '@dl3g0/primeng/password';
import { InputIconModule } from '@dl3g0/primeng/inputicon';
import { IconFieldModule } from '@dl3g0/primeng/iconfield';
import { InputTextModule } from '@dl3g0/primeng/inputtext';
import { ToggleButtonModule } from '@dl3g0/primeng/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, StepperModule, RouterModule, FormsModule, ReactiveFormsModule, ButtonModule, PasswordModule, InputIconModule, IconFieldModule, InputTextModule, ToggleButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, VerticalDoc, LinearDoc, TemplateDoc, AccessibilityDoc]
})
export class StepperDocModule {}
