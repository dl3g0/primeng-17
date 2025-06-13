import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'builtin-themes-doc',
    template: `
        <app-docsectiontext>
            <p>
                PrimeNG ships with various free themes to choose from. The list below states all the available themes in the npm distribution with import paths. For a live preview, use the configurator
                <span class="border-round inline-flex border-1 w-2rem h-2rem p-0 align-items-center justify-content-center bg-primary"><span class="pi pi-palette"></span></span> at the topbar to switch themes.
            </p>
        </app-docsectiontext>
        <div class="h-20rem overflow-auto">
            <app-code [code]="code" [hideToggleCode]="true"></app-code>
        </div>
    `,
    standalone: false
})
export class BuiltInThemesDoc {
    code: Code = {
        basic: `@dl3g0/primeng/resources/themes/bootstrap4-light-blue/theme.css
@dl3g0/primeng/resources/themes/bootstrap4-light-purple/theme.css
@dl3g0/primeng/resources/themes/bootstrap4-dark-blue/theme.css
@dl3g0/primeng/resources/themes/bootstrap4-dark-purple/theme.css
@dl3g0/primeng/resources/themes/md-light-indigo/theme.css
@dl3g0/primeng/resources/themes/md-light-deeppurple/theme.css
@dl3g0/primeng/resources/themes/md-dark-indigo/theme.css
@dl3g0/primeng/resources/themes/md-dark-deeppurple/theme.css
@dl3g0/primeng/resources/themes/mdc-light-indigo/theme.css
@dl3g0/primeng/resources/themes/mdc-light-deeppurple/theme.css
@dl3g0/primeng/resources/themes/mdc-dark-indigo/theme.css
@dl3g0/primeng/resources/themes/mdc-dark-deeppurple/theme.css
@dl3g0/primeng/resources/themes/fluent-light/theme.css
@dl3g0/primeng/resources/themes/lara-light-blue/theme.css
@dl3g0/primeng/resources/themes/lara-light-indigo/theme.css
@dl3g0/primeng/resources/themes/lara-light-purple/theme.css
@dl3g0/primeng/resources/themes/lara-light-teal/theme.css
@dl3g0/primeng/resources/themes/lara-dark-blue/theme.css
@dl3g0/primeng/resources/themes/lara-dark-indigo/theme.css
@dl3g0/primeng/resources/themes/lara-dark-purple/theme.css
@dl3g0/primeng/resources/themes/lara-dark-teal/theme.css
@dl3g0/primeng/resources/themes/soho-light/theme.css
@dl3g0/primeng/resources/themes/soho-dark/theme.css
@dl3g0/primeng/resources/themes/viva-light/theme.css
@dl3g0/primeng/resources/themes/viva-dark/theme.css
@dl3g0/primeng/resources/themes/mira/theme.css
@dl3g0/primeng/resources/themes/nano/theme.css
@dl3g0/primeng/resources/themes/saga-blue/theme.css
@dl3g0/primeng/resources/themes/saga-green/theme.css
@dl3g0/primeng/resources/themes/saga-orange/theme.css
@dl3g0/primeng/resources/themes/saga-purple/theme.css
@dl3g0/primeng/resources/themes/vela-blue/theme.css
@dl3g0/primeng/resources/themes/vela-green/theme.css
@dl3g0/primeng/resources/themes/vela-orange/theme.css
@dl3g0/primeng/resources/themes/vela-purple/theme.css
@dl3g0/primeng/resources/themes/arya-blue/theme.css
@dl3g0/primeng/resources/themes/arya-green/theme.css
@dl3g0/primeng/resources/themes/arya-orange/theme.css
@dl3g0/primeng/resources/themes/arya-purple/theme.css
@dl3g0/primeng/resources/themes/nova/theme.css
@dl3g0/primeng/resources/themes/nova-alt/theme.css
@dl3g0/primeng/resources/themes/nova-accent/theme.css
@dl3g0/primeng/resources/themes/luna-amber/theme.css
@dl3g0/primeng/resources/themes/luna-blue/theme.css
@dl3g0/primeng/resources/themes/luna-green/theme.css
@dl3g0/primeng/resources/themes/luna-pink/theme.css
@dl3g0/primeng/resources/themes/rhea/theme.css`
    };
}
