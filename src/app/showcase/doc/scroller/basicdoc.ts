import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'basic-doc',
    template: `
        <app-docsectiontext>
            <p>
                Scroller requires <i>items</i> as the data to display, <i>itemSize</i> for the dimensions of an item and <i>item</i> template are required on component. In addition, an initial array is required based on the total number of items to
                display. Size of the viewport is configured using <i>scrollWidth</i>, <i>scrollHeight</i> properties directly or with CSS <i>width</i> and <i>height</i> styles.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-scroller [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border-1 surface-border" [style]="{ width: '200px', height: '200px' }">
                <ng-template pTemplate="item" let-item let-options="options">
                    <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
                </ng-template>
            </p-scroller>
        </div>
        <app-code [code]="code" selector="scroller-basic-demo"></app-code>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class BasicDoc {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
    }

    code: Code = {
        basic: `<p-scroller
    [items]="items"
    [itemSize]="50"
    scrollHeight="200px"
    styleClass="border-1 surface-border"
    [style]="{'width': '200px', 'height': '200px'}">
        <ng-template pTemplate="item" let-item let-options="options">
            <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">
                {{ item }}
            </div>
        </ng-template>
</p-scroller>`,

        html: `<div class="card flex justify-content-center">
    <p-scroller
        [items]="items"
        [itemSize]="50"
        scrollHeight="200px"
        styleClass="border-1 surface-border"
        [style]="{'width': '200px', 'height': '200px'}">
            <ng-template pTemplate="item" let-item let-options="options">
                <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">
                    {{ item }}
                </div>
            </ng-template>
    </p-scroller>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { ScrollerModule } from '@dl3g0/primeng/scroller';

@Component({
    selector: 'scroller-basic-demo',
    templateUrl: './scroller-basic-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }
        }\`
    ],
    standalone: true,
    imports: [ScrollerModule]
})
export class ScrollerBasicDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,
        scss: `
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }
}`
    };
}
