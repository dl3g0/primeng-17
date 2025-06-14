import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'meter-doc',
    template: `
        <app-docsectiontext>
            <p>Strength meter is displayed as a popup while a value is being entered.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-password [(ngModel)]="value" />
        </div>
        <app-code [code]="code" selector="password-meter-demo"></app-code>
    `,
    standalone: false
})
export class MeterDoc {
    value!: string;

    code: Code = {
        basic: `<p-password [(ngModel)]="value" />`,

        html: `<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { PasswordModule } from '@dl3g0/primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-meter-demo',
    templateUrl: './password-meter-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordMeterDemo {
    value!: string;
}`
    };
}
