import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'floatlabel-doc',
    template: `
        <app-docsectiontext>
            <p>A floating label appears on top of the input field when focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-floatLabel>
                <input pInputText id="username" [(ngModel)]="value" />
                <label for="username">Username</label>
            </p-floatLabel>
        </div>
        <app-code [code]="code" selector="input-text-floatlabel-demo"></app-code>
    `,
    standalone: false
})
export class FloatLabelDoc {
    value: string | undefined;

    code: Code = {
        basic: `<p-floatLabel>
    <input pInputText id="username" [(ngModel)]="value" />
    <label for="username">Username</label>
</p-floatLabel>`,

        html: `<div class="card flex justify-content-center">
    <p-floatLabel>
        <input pInputText id="username" [(ngModel)]="value" />
        <label for="username">Username</label>
    </p-floatLabel>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { InputTextModule } from '@dl3g0/primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from '@dl3g0/primeng/floatlabel';

@Component({
    selector: 'input-text-floatlabel-demo',
    templateUrl: './input-text-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule, FloatLabelModule]
})
export class InputTextFloatlabelDemo {
    value: string | undefined;
}`
    };
}
