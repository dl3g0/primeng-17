import { Component } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { Code } from '@domain/code';

@Component({
    selector: 'toast-multiple-demo',
    template: `
        <app-docsectiontext>
            <p>Multiple toasts are displayed by passing an array to the <i>showAll</i> method of the <i>messageService</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast />
            <p-button (onClick)="show()" label="Multiple" severity="warning" />
        </div>
        <app-code [code]="code" selector="toast-multiple-demo"></app-code>
    `,
    providers: [MessageService],
    standalone: false
})
export class MultipleDoc {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
            { severity: 'error', summary: 'Message 4', detail: 'Message Content' }
        ]);
    }

    code: Code = {
        basic: `<p-toast />
<p-button
    (onClick)="show()"
    label="Multiple"
    severity="warning" />`,
        html: `<div class="card flex justify-content-center">
    <p-toast />
    <p-button
        (onClick)="show()"
        label="Multiple"
        severity="warning" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { ToastModule } from '@dl3g0/primeng/toast';
import { ButtonModule } from '@dl3g0/primeng/button';
import { RippleModule } from '@dl3g0/primeng/ripple';

@Component({
    selector: 'toast-multiple-demo',
    templateUrl: './toast-multiple-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastMultipleDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
            { severity: 'error', summary: 'Message 4', detail: 'Message Content' }
        ]);
    }
}`
    };
}
