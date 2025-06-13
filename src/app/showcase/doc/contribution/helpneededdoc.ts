import { Component } from '@angular/core';

@Component({
    selector: 'helpneeded-doc',
    template: `
        <app-docsectiontext>
            <p>This is an independent community-driven fork of PrimeNG, based on version 17 of the original library developed by PrimeTek. While it is not officially supported or sponsored by PrimeTek, it is maintained through community effort.</p>
            <p>We welcome any contributions! Here are some ways you can help:</p>
            <h3>Issue Triage</h3>
            <p>Help us manage issues by;</p>
            <ul class="line-height-3 px-10 m-0">
                <li>Reproducing reported bugs</li>
                <li>Clarifying issue descriptions</li>
                <li>Tagging issues with appropriate labels</li>
            </ul>

            <h3>Sending Pull Requests</h3>
            <p>We encourage you to send pull requests, especially for issues tagged with the <i>help-needed</i> label.</p>

            <h3>Community Support</h3>
            <p>
                Assist other users by participating in the issue tracker, <a href="https://github.com/dl3g0/primeng-17/issues" target="_blank" rel="noopener noreferrer">GitHub issues</a>. Your expertise can help others solve problems and improve their experience with PrimeNG.
            </p>
        </app-docsectiontext>
    `,
    standalone: false
})
export class HelpNeededDoc {}
