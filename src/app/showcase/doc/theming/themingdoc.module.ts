import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@dl3g0/primeng/button';
import { PanelModule } from '@dl3g0/primeng/panel';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { ArchitectureDoc } from './architecturedoc';
import { BuiltInThemesDoc } from './builtinthemesdoc';
import { CSSVariablesDoc } from './cssvariablesdoc';
import { CustomThemeDoc } from './customthemedoc';
import { PrimeFlexDoc } from './primeflexdoc';
import { ScalingDoc } from './scalingdoc';
import { ScopedCSSDoc } from './scopedcssdoc';
import { SwitchThemesDoc } from './switchthemesdoc';
import { UtilsDoc } from './utilsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, ButtonModule, PanelModule],
    declarations: [ArchitectureDoc, CSSVariablesDoc, CustomThemeDoc, ScopedCSSDoc, PrimeFlexDoc, ScalingDoc, BuiltInThemesDoc, SwitchThemesDoc, UtilsDoc],
    exports: [AppDocModule]
})
export class ThemingDocModule {}
