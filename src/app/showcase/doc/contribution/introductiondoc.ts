import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'indroduction-doc',
    template: `
        <app-docsectiontext>
            <p>
                This unofficial fork builds upon PrimeNG 17 and adds compatibility with Angular 20. While it is not affiliated with or endorsed by PrimeTek, it follows the open-source MIT license, aiming to support the development of modern, accessible applications.
            </p>
            <h3>Development Setup</h3>
            <p>To begin with, clone the PrimeNG repository from GitHub:</p>
            <app-code [code]="code1" [hideToggleCode]="true" [hideStackBlitz]="true"></app-code>
            <p style="margin-top: 1rem;">Then run the showcase in your local environment.</p>
            <app-code [code]="code2" [hideToggleCode]="true" [hideStackBlitz]="true"></app-code>
            <h3>Project Structure</h3>
            <p>PrimeNG's project structure is organized as follows:</p>
            <app-code [code]="code3" [hideToggleCode]="true" [hideStackBlitz]="true"></app-code>
        </app-docsectiontext>
    `,
    standalone: false
})
export class IntroductionDoc {
    code1: Code = {
        basic: `https://github.com/dl3g0/primeng-17.git
cd primeng-17`
    };
    code2: Code = {
        basic: `npm install
ng serve`
    };
    code3: Code = {
        basic: `- app
  - showcase                // website
  - components              // main directory of components and directives`
    };
}
