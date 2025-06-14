import { Component, OnInit } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'dynamic-doc',
    template: `
        <app-docsectiontext>
            <p>Tabs can be generated dynamically using the standard <i>ngFor</i> directive.</p>
        </app-docsectiontext>
        <div class="card">
            <p-tabView>
                <p-tabPanel *ngFor="let tab of tabs" [header]="tab.title">
                    <p>
                        {{ tab.content }}
                    </p>
                </p-tabPanel>
            </p-tabView>
        </div>
        <app-code [code]="code" selector="tab-view-dynamic-demo"></app-code>
    `,
    standalone: false
})
export class DynamicDoc implements OnInit {
    tabs: { title: string; content: string }[] = [];

    ngOnInit() {
        this.tabs = [
            { title: 'Tab 1', content: 'Tab 1 Content' },
            { title: 'Tab 2', content: 'Tab 2 Content' },
            { title: 'Tab 3', content: 'Tab 3 Content' }
        ];
    }

    code: Code = {
        basic: `<p-tabView>
    <p-tabPanel *ngFor="let tab of tabs" [header]="tab.title">
        <p>
            {{ tab.content }}
        </p>
    </p-tabPanel>
</p-tabView>`,

        html: `<div class="card">
<p-tabView>
<p-tabPanel *ngFor="let tab of tabs" [header]="tab.title">
    <p>
        {{ tab.content }}
    </p>
</p-tabPanel>
</p-tabView>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { TabViewModule } from '@dl3g0/primeng/tabview';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tab-view-dynamic-demo',
    templateUrl: './tab-view-dynamic-demo.html',
    standalone: true,
    imports: [TabViewModule, CommonModule]
})
export class TabViewDynamicDemo implements OnInit {
    tabs: { title: string, content: string }[] = [];

    ngOnInit() {
        this.tabs = [
            { title: 'Tab 1', content: 'Tab 1 Content' },
            { title: 'Tab 2', content: 'Tab 2 Content' },
            { title: 'Tab 3', content: 'Tab 3 Content' }
        ];
    }

}`
    };
}
