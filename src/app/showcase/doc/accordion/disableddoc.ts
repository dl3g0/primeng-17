import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'disabled-doc',
    template: `
        <app-docsectiontext>
            <p>Enabling <i>disabled</i> property of an AccordionTab prevents user interaction.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-accordion [activeIndex]="0">
                <p-accordionTab header="Header I">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </p-accordionTab>
                <p-accordionTab header="Header II">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </p-accordionTab>
                <p-accordionTab header="Header III">
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </p-accordionTab>
                <p-accordionTab header="Header IV" [disabled]="true" />
            </p-accordion>
        </div>
        <app-code [code]="code" selector="accordion-disabled-demo"></app-code>
    `,
    standalone: false
})
export class DisabledDoc {
    code: Code = {
        basic: `<p-accordion [activeIndex]="0">
    <p-accordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header IV" [disabled]="true" />
</p-accordion>`,

        html: `<div class="card flex justify-content-center">
    <p-accordion [activeIndex]="0">
        <p-accordionTab header="Header I">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header II">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header III">
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header IV" [disabled]="true" />
    </p-accordion>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { AccordionModule } from '@dl3g0/primeng/accordion';

@Component({
    selector: 'accordion-disabled-demo',
    templateUrl: './accordion-disabled-demo.html',
    standalone: true,
    imports: [AccordionModule]
})
export class AccordionDisabledDemo {}`
    };
}
