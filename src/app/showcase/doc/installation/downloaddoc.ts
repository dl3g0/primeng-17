import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'download-doc',
    template: `
        <app-docsectiontext>
            <p>PrimeNG is available for download at <a href="https://www.npmjs.com/package/@dl3g0/primeng">npm</a>.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `,
    standalone: false
})
export class DownloadDoc {
    code: Code = {
        command: `npm i @dl3g0/primeng`
    };
}
