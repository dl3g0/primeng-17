import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `,
    standalone: false
})
export class ImportDoc {
    code: Code = {
        html: `import { AvatarModule } from '@dl3g0/primeng/avatar';
import { AvatarGroupModule } from '@dl3g0/primeng/avatargroup';`
    };
}
