import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `,
    standalone: false
})
export class ImportDoc {
    code: Code = {
        typescript: `import { ProgressBarModule } from '@jacobg213/primeng-17/progressbar';
// For dynamic progressbar demo
import { ToastModule } from '@jacobg213/primeng-17/toast';`
    };
}
