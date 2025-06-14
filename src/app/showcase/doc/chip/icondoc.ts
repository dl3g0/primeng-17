import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'chip-icon-demo',
    template: `
        <app-docsectiontext>
            <p>A font icon next to the label can be displayed with the <i>icon</i> property.</p>
        </app-docsectiontext>
        <div class="card flex align-items-center gap-2 flex-wrap">
            <p-chip label="Apple" icon="pi pi-apple" />
            <p-chip label="Facebook" icon="pi pi-facebook" />
            <p-chip label="Google" icon="pi pi-google" />
            <p-chip label="Microsoft" icon="pi pi-microsoft" [removable]="true" />
        </div>
        <app-code [code]="code" selector="chip-icon-demo"></app-code>
    `,
    standalone: false
})
export class IconDoc {
    code: Code = {
        basic: `<p-chip label="Apple" icon="pi pi-apple" />`,
        html: `<div class="card flex align-items-center gap-2 flex-wrap">
    <p-chip label="Apple" icon="pi pi-apple" />
    <p-chip label="Facebook" icon="pi pi-facebook" />
    <p-chip label="Google" icon="pi pi-google" />
    <p-chip label="Microsoft" icon="pi pi-microsoft" [removable]="true" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { ChipModule } from '@dl3g0/primeng/chip';

@Component({
    selector: 'chip-icon-demo',
    templateUrl: './chip-icon-demo.html',
    standalone: true,
    imports: [ChipModule]
})
export class ChipIconDemo {}`
    };
}
