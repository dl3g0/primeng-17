import { Component } from '@angular/core';
import { MenuItem, MessageService } from '@dl3g0/primeng/api';
import { Code } from '@domain/code';

@Component({
    selector: 'raised-text-doc',
    template: `
        <app-docsectiontext>
            <p>Text buttons can be displayed as raised as well for elevation.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center flex-wrap gap-3">
            <p-toast />
            <p-splitButton label="Primary" [model]="items" (onClick)="save('info')" raised text />
            <p-splitButton label="Secondary" [model]="items" (onClick)="save('info')" raised text severity="secondary" />
            <p-splitButton label="Success" [model]="items" (onClick)="save('info')" raised text severity="success" />
            <p-splitButton label="Info" [model]="items" (onClick)="save('info')" raised text severity="info" />
            <p-splitButton label="Warning" [model]="items" (onClick)="save('info')" raised text severity="warning" />
            <p-splitButton label="Help" [model]="items" (onClick)="save('info')" raised text severity="help" />
            <p-splitButton label="Danger" [model]="items" (onClick)="save('info')" raised text severity="danger" />
        </div>
        <app-code [code]="code" selector="split-button-raised-text-demo"></app-code>
    `,
    providers: [MessageService],
    standalone: false
})
export class RaisedTextDoc {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular Website', url: 'http://angular.io' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }

    code: Code = {
        basic: `<p-splitButton
    label="Primary"
    [model]="items"
    (onClick)="save('info')"
    raised
    text />
<p-spliButton
    label="Secondary"
    [model]="items"
    (onClick)="save('info')"
    raised
    text
    severity="secondary" />
<p-splitButton
    label="Success"
    [model]="items"
    (onClick)="save('info')"
    raised
    text
    severity="success" />
<p-splitButton
    label="Info"
    [model]="items"
    (onClick)="save('info')"
    raised
    text
    severity="info" />
<p-splitButton
    label="Warning"
    [model]="items"
    (onClick)="save('info')"
    raised
    text
    severity="warning" />
<p-splitButton
    label="Help"
    [model]="items"
    (onClick)="save('info')"
    raised
    text
    severity="help" />
<p-splitButton
    label="Danger"
    [model]="items"
    (onClick)="save('info')"
    raised
    text
    severity="danger" />`,

        html: `<div class="card flex justify-content-center flex-wrap gap-3">
    <p-toast />
    <p-splitButton
        label="Primary"
        [model]="items"
        (onClick)="save('info')"
        raised
        text />
    <p-splitButton
        label="Secondary"
        [model]="items"
        (onClick)="save('info')"
        raised
        text
        severity="secondary" />
    <p-splitButton
        label="Success"
        [model]="items"
        (onClick)="save('info')"
        raised
        text
        severity="success" />
    <p-splitButton
        label="Info"
        [model]="items"
        (onClick)="save('info')"
        raised
        text
        severity="info" />
    <p-splitButton
        label="Warning"
        [model]="items"
        (onClick)="save('info')"
        raised
        text
        severity="warning" />
    <p-splitButton
        label="Help"
        [model]="items"
        (onClick)="save('info')"
        raised
        text
        severity="help" />
    <p-splitButton
        label="Danger"
        [model]="items"
        (onClick)="save('info')"
        raised
        text
        severity="danger" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { MenuItem, MessageService } from '@dl3g0/primeng/api';
import { SplitButtonModule } from '@dl3g0/primeng/splitbutton';
import { ToastModule } from '@dl3g0/primeng/toast';

@Component({
    selector: 'split-button-raised-text-demo',
    templateUrl: './split-button-raised-text-demo.html',
    standalone: true,
    imports: [SplitButtonModule, ToastModule],
    providers: [MessageService]
})
export class SplitButtonRaisedTextDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular Website', url: 'http://angular.io' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`
    };
}
