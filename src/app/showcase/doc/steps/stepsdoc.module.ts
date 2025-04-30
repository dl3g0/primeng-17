import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '@jacobg213/primeng-17/dropdown';
import { InputTextModule } from '@jacobg213/primeng-17/inputtext';
import { InputMaskModule } from '@jacobg213/primeng-17/inputmask';
import { CheckboxModule } from '@jacobg213/primeng-17/checkbox';
import { StepsModule } from '@jacobg213/primeng-17/steps';
import { ToastModule } from '@jacobg213/primeng-17/toast';
import { CardModule } from '@jacobg213/primeng-17/card';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ConfirmationDemo } from './confirmationdemo';
import { ImportDoc } from './importdoc';
import { InteractiveDoc } from './interactivedoc';
import { PaymentDemo } from './paymentdemo';
import { PersonalDemo } from './personaldemo';
import { RoutingDoc } from './routingdoc';
import { SeatDemo } from './seatdemo';
import { StyleDoc } from './styledoc';
import { TicketService } from '@service/ticketservice';
import { AccessibilityDoc } from './accessibilitydoc';
import { ButtonModule } from '@jacobg213/primeng-17/button';
import { ControlledDoc } from './controlleddoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, StepsModule, ToastModule, AppDocModule, FormsModule, DropdownModule, InputTextModule, InputMaskModule, CheckboxModule, CardModule, ButtonModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, InteractiveDoc, ConfirmationDemo, PaymentDemo, PersonalDemo, SeatDemo, RoutingDoc, ControlledDoc, AccessibilityDoc],
    exports: [AppDocModule],
    providers: [TicketService]
})
export class StepsDocModule {}
