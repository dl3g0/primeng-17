import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepperModule } from '@jacobg213/primeng-17/stepper';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { VerticalDoc } from './verticaldoc';
import { LinearDoc } from './lineardoc';
import { TemplateDoc } from './templatedoc';
import { PasswordModule } from '@jacobg213/primeng-17/password';
import { InputIconModule } from '@jacobg213/primeng-17/inputicon';
import { IconFieldModule } from '@jacobg213/primeng-17/iconfield';
import { InputTextModule } from '@jacobg213/primeng-17/inputtext';
import { ToggleButtonModule } from '@jacobg213/primeng-17/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, StepperModule, RouterModule, FormsModule, ReactiveFormsModule, ButtonModule, PasswordModule, InputIconModule, IconFieldModule, InputTextModule, ToggleButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, VerticalDoc, LinearDoc, TemplateDoc, AccessibilityDoc]
})
export class StepperDocModule {}
