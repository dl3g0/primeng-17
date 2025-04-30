import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'avatar-template-demo',
    template: `
        <app-docsectiontext>
            <p>Content can easily be customized with the dynamic content instead of using the built-in modes.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-avatar size="xlarge">
                <span class="text-base">Content</span>
            </p-avatar>
        </div>
        <app-code [code]="code" selector="avatar-template-demo"></app-code>
    `,
    standalone: false
})
export class TemplateDoc {
    code: Code = {
        basic: `<p-avatar size="xlarge">
    <span class="text-base">Content</span>
</p-avatar>`,
        html: `<div class="card flex justify-content-center">
    <p-avatar size="xlarge">
        <span class="text-base">Content</span>
    </p-avatar>
</div>`,
        typescript: `import { Component } from '@angular/core';
import { AvatarModule } from '@jacobg213/primeng-17/avatar';

@Component({
    selector: 'avatar-template-demo',
    templateUrl: './avatar-template-demo.html',
    standalone: true,
    imports: [AvatarModule]
})
export class AvatarTemplateDemo {}`
    };
}
