import { Component, OnInit } from '@angular/core';
import { Code } from '@domain/code';
import { CountryService } from '@service/countryservice';
import { PlatformService } from '@service/platformservice';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'dropdown-doc',
    template: ` <app-docsectiontext>
            <p>
                Enabling <i>dropdown</i> property displays a button next to the input field where click behavior of the button is defined using <i>dropdownMode</i> property that takes <strong>blank</strong> or <strong>current</strong> as possible
                values. <i>blank</i> is the default mode to send a query with an empty string whereas <i>current</i> setting sends a query with the current value of the input.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-autoComplete [(ngModel)]="selectedCountry" [dropdown]="true" placeholder="Search" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />
        </div>
        <app-code [code]="code" selector="autocomplete-dropdown-demo"></app-code>`,
    standalone: false
})
export class DropdownDoc implements OnInit {
    countries: any[] | undefined;

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(
        private countryService: CountryService,
        private PlatformService: PlatformService
    ) {}

    ngOnInit() {
        if (this.PlatformService.isBrowser()) {
            this.countryService.getCountries().then((countries) => {
                this.countries = countries;
            });
        }
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

    code: Code = {
        basic: `<p-autoComplete
    [(ngModel)]="selectedCountry"
    [dropdown]="true"
    [suggestions]="filteredCountries"
    (completeMethod)="filterCountry($event)"
    optionLabel="name" />`,

        html: `<div class="card flex justify-content-center">
    <p-autoComplete
        [(ngModel)]="selectedCountry"
        [dropdown]="true"
        [suggestions]="filteredCountries"
        (completeMethod)="filterCountry($event)"
        optionLabel="name" />
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { CountryService } from '@service/countryservice';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from '@dl3g0/primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-dropdown-demo',
    templateUrl: './autocomplete-dropdown-demo.html',
    standalone:true,
    imports: [FormsModule, AutoCompleteModule],
    providers:[CountryService]
})
export class AutocompleteDropdownDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,
        service: ['CountryService'],

        data: `
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`
    };
}
