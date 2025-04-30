import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { DividerModule } from '@jacobg213/primeng-17/divider';
import { DropdownModule } from '@jacobg213/primeng-17/dropdown';
import { PaginatorModule } from '@jacobg213/primeng-17/paginator';
import { SliderModule } from '@jacobg213/primeng-17/slider';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImagesDoc } from './imagesdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { LocaleDoc } from './localedoc';
import { CurrentPageReportDoc } from './currentpagereportdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PaginatorModule, ButtonModule, DividerModule, SliderModule, RouterModule, DropdownModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, ImagesDoc, StyleDoc, AccessibilityDoc, LocaleDoc, CurrentPageReportDoc]
})
export class PaginatorDocModule {}
