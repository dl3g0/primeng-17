import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `,
    standalone: false
})
export class ImportDoc {
    code: Code = {
        typescript: `import { ProgressBarModule } from '@dl3g0/primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from '@dl3g0/primeng/toast';`
    };
}
