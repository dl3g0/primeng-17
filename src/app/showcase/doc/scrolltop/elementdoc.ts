import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'element-doc',
    template: `
        <app-docsectiontext>
            <p>Setting the <i>target</i> property to <i>parent</i> binds ScrollTop to its parent element that has scrolling content.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <div style="width: 250px; height: 200px; overflow: auto">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                    adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue
                    mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                    Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan
                    in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <p-scrollTop target="parent" styleClass="custom-scrolltop" [threshold]="100" icon="pi pi-arrow-up" />
            </div>
        </div>
        <app-code [code]="code" selector="scroll-top-element-demo"></app-code>
    `,
    standalone: false
})
export class ElementDoc {
    code: Code = {
        basic: `<p-scrollTop
    target="parent"
    styleClass="custom-scrolltop"
    [threshold]="100"
    icon="pi pi-arrow-up" />`,
        html: `<div class="card">
    <div style="width: 250px; height: 200px; overflow: auto">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
            adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue
            mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
            Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan
            in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
        </p>
        <p-scrollTop target="parent" styleClass="custom-scrolltop" [threshold]="100" icon="pi pi-arrow-up" />
    </div>
</div>`,
        typescript: `import { Component } from '@angular/core';
import { ScrollTopModule } from '@dl3g0/primeng/scrolltop';

@Component({
    selector: 'scroll-top-element-demo',
    templateUrl: './scroll-top-element-demo.html',
    standalone: true,
    imports: [ScrollTopModule]
})
export class ScrollTopElementDemo {}`
    };
}
