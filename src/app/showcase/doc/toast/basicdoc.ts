import { Component } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { Code } from '@domain/code';

@Component({
    selector: 'basic-doc',
    template: `
        <app-docsectiontext>
            <p>
                Toasts are displayed by calling the <i>add</i> and <i>addAll</i> method provided by the <i>messageService</i>. A single toast is specified by the <i>Message</i> interface that defines various properties such as <i>severity</i>,
                <i>summary</i> and <i>detail</i>.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast />
            <p-button (onClick)="show()" label="Show" />
        </div>
        <app-code [code]="code" selector="toast-basic-demo"></app-code>
    `,
    providers: [MessageService],
    standalone: false
})
export class BasicDoc {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    code: Code = {
        basic: `<p-toast />
<p-button (onClick)="show()" label="Show" />`,
        html: `<div class="card flex justify-content-center">
    <p-toast />
    <p-button (onClick)="show()" label="Show" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { ToastModule } from '@dl3g0/primeng/toast';
import { ButtonModule } from '@dl3g0/primeng/button';
import { RippleModule } from '@dl3g0/primeng/ripple';

@Component({
    selector: 'toast-basic-demo',
    templateUrl: './toast-basic-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastBasicDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`
    };
}
