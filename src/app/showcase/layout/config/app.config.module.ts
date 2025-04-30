import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { InputSwitchModule } from '@jacobg213/primeng-17/inputswitch';
import { RadioButtonModule } from '@jacobg213/primeng-17/radiobutton';
import { SidebarModule } from '@jacobg213/primeng-17/sidebar';
import { AppConfigComponent } from './app.config.component';
import { SelectButtonModule } from '@jacobg213/primeng-17/selectbutton';
@NgModule({
    imports: [CommonModule, FormsModule, SidebarModule, InputSwitchModule, ButtonModule, RadioButtonModule, SelectButtonModule],
    exports: [AppConfigComponent],
    declarations: [AppConfigComponent]
})
export class AppConfigModule {}
