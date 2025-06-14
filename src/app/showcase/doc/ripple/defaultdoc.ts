import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'default-doc',
    template: `
        <app-docsectiontext>
            <p>Default Demo Content.</p>
        </app-docsectiontext>
        <div class="card card-container flex justify-content-center align-items-center">
            <div pRipple class="card text-primary bg-primary flex select-none justify-content-center align-items-center shadow-2">Default</div>
        </div>
        <app-code [code]="code" selector="ripple-default-demo"></app-code>
    `,
    standalone: false
})
export class DefaultDoc {
    code: Code = {
        basic: `<div pRipple class="card text-primary bg-primary flex select-none justify-content-center align-items-center shadow-2">
    Default
</div>`,
        html: `<div class="card card-container flex justify-content-center align-items-center">
    <div pRipple class="card text-primary bg-primary flex select-none justify-content-center align-items-center shadow-2">
        Default
    </div>
</div>`,
        typescript: `import { Component } from '@angular/core';
import { RippleModule } from '@dl3g0/primeng/ripple';

@Component({
    selector: 'ripple-default-demo',
    templateUrl: './ripple-default-demo.html',
    styles: [
        \`:host ::ng-deep .card-container {
            .card {
                width: 75px;
                height: 75px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                user-select: none;
                padding: 0;

                &:last-child {
                    margin-right: 0;
                }
            }
        }\`
    ],
    standalone: true,
    imports: [RippleModule]
})
export class RippleDefaultDemo {
}`,
        scss: `:host ::ng-deep .card-container {
    .card {
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        user-select: none;
        padding: 0;

        &:last-child {
            margin-right: 0;
        }
    }
}`
    };
}
