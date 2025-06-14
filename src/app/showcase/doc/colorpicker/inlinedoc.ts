import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'color-picker-inline-demo',
    template: `
        <app-docsectiontext>
            <p>ColorPicker is displayed as a popup by default, add <i>inline</i> property to customize this behavior.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-colorPicker [(ngModel)]="color" [inline]="true" />
        </div>
        <app-code [code]="code" selector="color-picker-inline-demo"></app-code>
    `,
    standalone: false
})
export class InlineDoc {
    color: string | undefined;

    code: Code = {
        basic: `<p-colorPicker
    [(ngModel)]="color1"
    [inline]="true" />`,

        html: `<div class="card flex justify-content-center">
    <p-colorPicker
        [(ngModel)]="color"
        [inline]="true" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from '@dl3g0/primeng/colorpicker';

@Component({
    selector: 'color-picker-inline-demo',
    templateUrl: './color-picker-inline-demo.html',
    standalone: true,
    imports: [FormsModule, ColorPickerModule]
})
export class ColorPickerInlineDemo {
    color: string | undefined;
}`
    };
}
