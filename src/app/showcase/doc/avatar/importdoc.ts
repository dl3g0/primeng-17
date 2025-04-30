import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `,
    standalone: false
})
export class ImportDoc {
    code: Code = {
        html: `import { AvatarModule } from '@jacobg213/primeng-17/avatar';
import { AvatarGroupModule } from '@jacobg213/primeng-17/avatargroup';`
    };
}
