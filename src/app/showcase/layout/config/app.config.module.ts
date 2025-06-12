import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@dl3g0/primeng/button';
import { InputSwitchModule } from '@dl3g0/primeng/inputswitch';
import { RadioButtonModule } from '@dl3g0/primeng/radiobutton';
import { SidebarModule } from '@dl3g0/primeng/sidebar';
import { AppConfigComponent } from './app.config.component';
import { SelectButtonModule } from '@dl3g0/primeng/selectbutton';
@NgModule({
    imports: [CommonModule, FormsModule, SidebarModule, InputSwitchModule, ButtonModule, RadioButtonModule, SelectButtonModule],
    exports: [AppConfigComponent],
    declarations: [AppConfigComponent]
})
export class AppConfigModule {}
