import { Component } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { Code } from '@domain/code';

@Component({
    selector: 'life-doc',
    template: `
        <app-docsectiontext>
            <p>A toast disappears after 3000ms by default, set the <i>life</i> option on either the message or toast to override this.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-toast [life]="10000" />
            <p-button (onClick)="showLife()" label="Show Life" />
            <p-button (onClick)="showLifeLong()" label="Show Life Long" />
        </div>
        <app-code [code]="code" selector="toast-life-demo"></app-code>
    `,
    providers: [MessageService],
    standalone: false
})
export class LifeDoc {
    constructor(private messageService: MessageService) {}

    showLife() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 10000ms' });
    }

    showLifeLong() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 20000ms', life: 20000 });
    }

    code: Code = {
        basic: `<p-toast [life]="10000" />
<p-button
    (onClick)="showLife()"
    label="Show Life" />
<p-button
    (onClick)="showLifeLong()"
    label="Show Life Long" />`,
        html: `<div class="card flex justify-content-center">
    <p-toast [life]="10000" />
    <p-button
        (onClick)="showLife()"
        label="Show Life" />
    <p-button
        (onClick)="showLifeLong()"
        label="Show Life Long" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { MessageService } from '@dl3g0/primeng/api';
import { ToastModule } from '@dl3g0/primeng/toast';
import { ButtonModule } from '@dl3g0/primeng/button';
import { RippleModule } from '@dl3g0/primeng/ripple';

@Component({
    selector: 'toast-life-demo',
    templateUrl: './toast-life-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastLifeDemo {
    constructor(private messageService: MessageService) {}

    showLifeDefault() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 10000ms' });
    }

    showLifeLong() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 20000ms', life: 20000 });
    }
}`
    };
}
