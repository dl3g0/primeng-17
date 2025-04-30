import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { ToggleClassDoc } from './toggleclassdoc';
import { ImportDoc } from './importdoc';
import { StyleClassModule } from '@jacobg213/primeng-17/styleclass';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { InputTextModule } from '@jacobg213/primeng-17/inputtext';
import { AnimationDoc } from './animationdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, StyleClassModule, ButtonModule, InputTextModule],
    declarations: [ImportDoc, ToggleClassDoc, AnimationDoc],
    exports: [AppDocModule]
})
export class StyleClassDocModule {}
