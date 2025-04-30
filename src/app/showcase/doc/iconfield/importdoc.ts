import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: `<app-code [code]="code" [hideToggleCode]="true"></app-code> `,
    standalone: false
})
export class ImportDoc {
    code: Code = {
        typescript: `import { IconFieldModule } from '@jacobg213/primeng-17/iconfield';
import { InputIconModule } from '@jacobg213/primeng-17/inputicon';
import { InputTextModule } from '@jacobg213/primeng-17/inputtext';`
    };
}
