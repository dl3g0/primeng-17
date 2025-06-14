import { Component, Input, ViewChild } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'appendto-doc',
    template: ` <app-docsectiontext>
            <p>Overlay can be mounted into its location, body or DOM element instance using this option.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>`,
    standalone: false
})
export class AppendToDoc {
    code: Code = {
        typescript: `
import { PrimeNGConfig, OverlayOptions } from '@dl3g0/primeng/api';

this.primengConfig.overlayOptions: OverlayOptions = {
    appendTo: 'body'
};`
    };
}
