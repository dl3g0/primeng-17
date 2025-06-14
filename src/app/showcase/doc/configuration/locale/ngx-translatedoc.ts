import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'ngx-translate-doc',
    template: `
        <app-docsectiontext>
            <p>i18n API can easily be integrated with 3rd party libraries such as ngx-translate that even allows dynamically changing the language in the application.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `,
    standalone: false
})
export class NgxTranslateDoc {
    code: Code = {
        typescript: `
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from '@dl3g0/primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private config: PrimeNGConfig, private translateService: TranslateService) {}

    ngOnInit() {
        this.translateService.setDefaultLang('en');
    }

    translate(lang: string) {
        this.translateService.use(lang);
        this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
    }
}`
    };
}
