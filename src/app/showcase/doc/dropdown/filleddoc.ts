import { Component, OnInit } from '@angular/core';
import { Code } from '@domain/code';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-filled-demo',
    template: `
        <app-docsectiontext>
            <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-dropdown [options]="cities" [(ngModel)]="selectedCity" variant="filled" optionLabel="name" placeholder="Select a City" />
        </div>
        <app-code [code]="code" selector="dropdown-filled-demo"></app-code>
    `,
    standalone: false
})
export class FilledDoc implements OnInit {
    cities: City[];

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

    code: Code = {
        basic: `<p-dropdown
    [options]="cities"
    [(ngModel)]="selectedCity"
    variant="filled"
    optionLabel="name"
    placeholder="Select a City" />`,

        html: `<div class="card flex justify-content-center">
    <p-dropdown
        [options]="cities"
        [(ngModel)]="selectedCity"
        variant="filled"
        optionLabel="name"
        placeholder="Select a City" />
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '@dl3g0/primeng/dropdown';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-filled-demo',
    templateUrl: './dropdown-filled-demo.html',
    standalone: true,
    imports: [FormsModule, DropdownModule]
})
export class DropdownFilledDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`
    };
}
