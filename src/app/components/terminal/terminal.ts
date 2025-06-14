import { NgModule, Component, AfterViewInit, AfterViewChecked, OnDestroy, Input, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomHandler } from '@dl3g0/primeng/dom';
import { TerminalService } from './terminalservice';
import { Subscription } from 'rxjs';
/**
 * Terminal is a text based user interface.
 * @group Components
 */
@Component({
    selector: 'p-terminal',
    template: `
        <div [ngClass]="'p-terminal p-component'" [ngStyle]="style" [class]="styleClass" (click)="focus()">
            <div *ngIf="welcomeMessage">{{ welcomeMessage }}</div>
            <div class="p-terminal-content">
                <div *ngFor="let command of commands">
                    <span class="p-terminal-prompt">{{ prompt }}</span>
                    <span class="p-terminal-command">{{ command.text }}</span>
                    <div class="p-terminal-response" [attr.aria-live]="'polite'">{{ command.response }}</div>
                </div>
            </div>
            <div class="p-terminal-prompt-container">
                <span class="p-terminal-content-prompt">{{ prompt }}</span>
                <input #in type="text" [(ngModel)]="command" class="p-terminal-input" autocomplete="off" (keydown)="handleCommand($event)" autofocus />
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./terminal.css'],
    host: {
        class: 'p-element'
    },
    standalone: false
})
export class Terminal implements AfterViewInit, AfterViewChecked, OnDestroy {
    @ViewChild('in') inputRef!: ElementRef<HTMLInputElement>;
    /**
     * Initial text to display on terminal.
     * @group Props
     */
    @Input() welcomeMessage: string | undefined;
    /**
     * Prompt text for each command.
     * @group Props
     */
    @Input() prompt: string | undefined;
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

    commands: any[] = [];

    command!: string;

    container!: Element;

    commandProcessed!: boolean;

    subscription: Subscription;

    constructor(
        public el: ElementRef,
        public terminalService: TerminalService,
        public cd: ChangeDetectorRef
    ) {
        this.subscription = terminalService.responseHandler.subscribe((response) => {
            this.commands[this.commands.length - 1].response = response;
            this.commandProcessed = true;
        });
    }

    ngAfterViewInit() {
        this.container = DomHandler.find(this.el.nativeElement, '.p-terminal')[0];
    }

    ngAfterViewChecked() {
        if (this.commandProcessed) {
            this.container.scrollTop = this.container.scrollHeight;
            this.commandProcessed = false;
        }
    }

    @Input()
    set response(value: string) {
        if (value) {
            this.commands[this.commands.length - 1].response = value;
            this.commandProcessed = true;
        }
    }

    handleCommand(event: KeyboardEvent) {
        if (event.keyCode == 13) {
            this.commands.push({ text: this.command });
            this.terminalService.sendCommand(this.command);
            this.command = '';
        }
    }

    focus() {
        this.inputRef.nativeElement.focus();
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [Terminal],
    declarations: [Terminal]
})
export class TerminalModule {}
