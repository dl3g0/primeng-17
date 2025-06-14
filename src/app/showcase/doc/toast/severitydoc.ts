import { Component } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { Code } from '@domain/code';

@Component({
    selector: 'severity-doc',
    template: `
        <app-docsectiontext>
            <p>
                The <i>severity</i> option specifies the type of the message. There are four types of messages: <i>success</i>, <i>info</i>, <i>warn</i> and <i>error</i>. The severity of the message is used to display the icon and the color of the
                toast.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-toast />
            <p-button type="button" (onClick)="showSuccess()" label="Success" severity="success" />
            <p-button type="button" (onClick)="showInfo()" label="Info" severity="info" />
            <p-button type="button" (onClick)="showWarn()" label="Warn" severity="warning" />
            <p-button type="button" (onClick)="showError()" label="Error" severity="danger" />
            <p-button type="button" (onClick)="showSecondary()" label="Secondary" severity="secondary" />
            <p-button type="button" (onClick)="showContrast()" label="Contrast" severity="contrast" />
        </div>
        <app-code [code]="code" selector="toast-severity-demo"></app-code>
    `,
    providers: [MessageService],
    standalone: false
})
export class SeverityDoc {
    constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }

    showContrast() {
        this.messageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
    }

    showSecondary() {
        this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
    }

    code: Code = {
        basic: `<p-toast />
<p-button
    type="button"
    (onClick)="showSuccess()"
    label="Success"
    severity="success" />
<p-button
    type="button"
    (onClick)="showInfo()"
    label="Info"
    severity="info" />
<p-button
    type="button"
    (onClick)="showWarn()"
    label="Warn"
    severity="warning" />
<p-button
    type="button"
    (onClick)="showError()"
    label="Error"
    severity="danger" />
<p-button
    type="button"
    (onClick)="showSecondary()"
    label="Secondary"
    severity="secondary" />
<p-button
    type="button"
    (onClick)="showContrast()"
    label="Contrast"
    severity="contrast" />`,
        html: `<div class="card flex justify-content-center gap-2">
    <p-toast />
    <p-button
        type="button"
        (onClick)="showSuccess()"
        label="Success"
        severity="success" />
    <p-button
        type="button"
        (onClick)="showInfo()"
        label="Info"
        severity="info" />
    <p-button
        type="button"
        (onClick)="showWarn()"
        label="Warn"
        severity="warning"  />
    <p-button
        type="button"
        (onClick)="showError()"
        label="Error"
        severity="danger" />
    <p-button
        type="button"
        (onClick)="showSecondary()"
        label="Secondary"
        severity="secondary" />
    <p-button
        type="button"
        (onClick)="showContrast()"
        label="Contrast"
        severity="contrast" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { ToastModule } from '@dl3g0/primeng/toast';
import { ButtonModule } from '@dl3g0/primeng/button';
import { RippleModule } from '@dl3g0/primeng/ripple';

@Component({
    selector: 'toast-severity-demo',
    templateUrl: './toast-severity-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastSeverityDemo {
    constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }

    showContrast() {
        this.messageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
    }

    showSecondary() {
        this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
    }
}`
    };
}
