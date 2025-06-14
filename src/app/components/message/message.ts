import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation, booleanAttribute } from '@angular/core';
import { CheckIcon } from '@dl3g0/primeng/icons/check';
import { ExclamationTriangleIcon } from '@dl3g0/primeng/icons/exclamationtriangle';
import { InfoCircleIcon } from '@dl3g0/primeng/icons/infocircle';
import { TimesCircleIcon } from '@dl3g0/primeng/icons/timescircle';
/**
 * Message groups a collection of contents in tabs.
 * @group Components
 */
@Component({
    selector: 'p-message',
    template: `
        <div aria-live="polite" class="p-inline-message p-component p-inline-message" [ngStyle]="style" [class]="styleClass" [ngClass]="containerClass">
            <CheckIcon *ngIf="icon === 'success'" [styleClass]="'p-inline-message-icon'" />
            <InfoCircleIcon *ngIf="icon === 'info'" [styleClass]="'p-inline-message-icon'" />
            <TimesCircleIcon *ngIf="icon === 'error'" [styleClass]="'p-inline-message-icon'" />
            <ExclamationTriangleIcon *ngIf="icon === 'warn'" [styleClass]="'p-inline-message-icon'" />
            <div *ngIf="!escape; else escapeOut">
                <span *ngIf="!escape" class="p-inline-message-text" [innerHTML]="text"></span>
            </div>
            <ng-template #escapeOut>
                <span *ngIf="escape" class="p-inline-message-text">{{ text }}</span>
            </ng-template>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./message.css'],
    host: {
        class: 'p-element'
    },
    standalone: false
})
export class UIMessage {
    /**
     * Severity level of the message.
     * @group Props
     */
    @Input() severity: 'success' | 'info' | 'warn' | 'error' | 'help' | 'primary' | 'secondary' | 'contrast' | string | null | undefined;
    /**
     * Text content.
     * @group Props
     */
    @Input() text: string | undefined;
    /**
     * Whether displaying messages would be escaped or not.
     * @group Props
     */
    @Input({ transform: booleanAttribute }) escape: boolean = true;
    /**
     * Inline style of the component.
     * @group Props
     */
    @Input() style: { [klass: string]: any } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    @Input() styleClass: string | undefined;

    get icon() {
        if (this.severity) {
            return this.severity;
        } else {
            return 'info';
        }
    }

    get containerClass() {
        return {
            [`p-inline-message-${this.severity}`]: this.severity,
            'p-inline-message-icon-only': this.text == null
        };
    }
}

@NgModule({
    imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon],
    exports: [UIMessage],
    declarations: [UIMessage]
})
export class MessageModule {}
