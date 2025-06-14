import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Message, MessageService } from '@dl3g0/primeng/api';
import { Button } from '@dl3g0/primeng/button';
import { CheckIcon } from '@dl3g0/primeng/icons/check';
import { ExclamationTriangleIcon } from '@dl3g0/primeng/icons/exclamationtriangle';
import { InfoCircleIcon } from '@dl3g0/primeng/icons/infocircle';
import { TimesIcon } from '@dl3g0/primeng/icons/times';
import { TimesCircleIcon } from '@dl3g0/primeng/icons/timescircle';
import { Messages } from './messages';

@Component({
    template: `
        <p-messages [(value)]="msgs"></p-messages>
        <p-messages></p-messages>
        <button type="button" pButton (click)="showSuccess()" label="Success" class="p-button-success"></button>
        <button type="button" pButton (click)="showInfo()" label="Info" class="p-button-info"></button>
        <button type="button" pButton (click)="showWarn()" label="Warn" class="p-button-warning"></button>
        <button type="button" pButton (click)="showError()" label="Error" class="p-button-danger"></button>
        <button type="button" pButton (click)="showDefault()"></button>
        <button type="button" pButton (click)="showViaService()" label="Use Service"></button>
        <button type="button" pButton (click)="showAllViaService()" label="Use Service"></button>
        <button type="button" pButton (click)="clearWithService()" label="Use Service"></button>
        <button type="button" pButton (click)="clearWithServiceAndKey()" label="Use Service"></button>
        <button type="button" pButton (click)="showClosableFalse()" label="Not Closable"></button>
    `,
    standalone: false
})
class TestMessagesComponent {
    msgs: Message[] = [];

    constructor(private messageService: MessageService) {}

    showSuccess() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    }

    showInfo() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarn() {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showError() {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showDefault() {
        this.msgs = [];
        this.msgs.push({ summary: 'Default Message', detail: 'Default detail' });
    }

    showViaService() {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    }

    showAllViaService() {
        this.messageService.addAll([
            { severity: 'success', key: 'primeng', summary: 'Service Message', detail: 'Via MessageService' },
            { severity: 'success', summary: 'Service Message', detail: 'Via MessageService' }
        ]);
    }

    showClosableFalse() {
        this.msgs = [];
        this.msgs.push({ summary: 'Not Closable Message', detail: 'Not closable', closable: false });
    }

    clearWithService() {
        this.messageService.clear();
    }

    clearWithServiceAndKey() {
        this.messageService.clear('primeng');
    }
}

describe('Messages', () => {
    let messages: Messages;
    let fixture: ComponentFixture<TestMessagesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, FormsModule, CheckIcon, TimesCircleIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, Button],
            declarations: [Messages, TestMessagesComponent],
            providers: [MessageService]
        });

        fixture = TestBed.createComponent(TestMessagesComponent);
        messages = fixture.debugElement.children[0].componentInstance;
    });

    it('should not display by default', () => {
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('.p-message'));
        expect(messageEl).not.toBeTruthy();
    });

    it('should show success', () => {
        fixture.detectChanges();

        const successButton = fixture.debugElement.query(By.css('button'));
        successButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-message-icon')).children[0];
        const summaryEl = fixture.debugElement.query(By.css('.p-message-summary'));
        const detailEl = fixture.debugElement.query(By.css('.p-message-detail'));
        expect(messageEl).toBeTruthy();
        expect(iconEl).toBeTruthy();
        expect(summaryEl).toBeTruthy();
        expect(detailEl).toBeTruthy();
        expect(iconEl.nativeElement.tagName.toLowerCase()).toEqual('checkicon');
        expect(summaryEl.nativeElement.innerHTML).toEqual('Success Message');
        expect(detailEl.nativeElement.innerHTML).toContain('Order submitted');
    });

    it('should show info', () => {
        fixture.detectChanges();

        const successButton = fixture.debugElement.queryAll(By.css('button'))[1];
        successButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-message-icon')).children[0];
        const summaryEl = fixture.debugElement.query(By.css('.p-message-summary'));
        const detailEl = fixture.debugElement.query(By.css('.p-message-detail'));
        expect(messageEl).toBeTruthy();
        expect(iconEl).toBeTruthy();
        expect(summaryEl).toBeTruthy();
        expect(detailEl).toBeTruthy();
        expect(iconEl.nativeElement.tagName.toLowerCase()).toEqual('infocircleicon');
        expect(summaryEl.nativeElement.innerHTML).toEqual('Info Message');
        expect(detailEl.nativeElement.innerHTML).toContain('PrimeNG rocks');
    });

    it('should show warning', () => {
        fixture.detectChanges();

        const successButton = fixture.debugElement.queryAll(By.css('button'))[2];
        successButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-message-icon')).children[0];
        const summaryEl = fixture.debugElement.query(By.css('.p-message-summary'));
        const detailEl = fixture.debugElement.query(By.css('.p-message-detail'));
        expect(messageEl).toBeTruthy();
        expect(iconEl).toBeTruthy();
        expect(summaryEl).toBeTruthy();
        expect(detailEl).toBeTruthy();
        expect(iconEl.nativeElement.tagName.toLowerCase()).toEqual('exclamationtriangleicon');
        expect(summaryEl.nativeElement.innerHTML).toEqual('Warn Message');
        expect(detailEl.nativeElement.innerHTML).toContain('There are unsaved changes');
    });

    it('should show error', () => {
        fixture.detectChanges();

        const successButton = fixture.debugElement.queryAll(By.css('button'))[3];
        successButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-message-icon')).children[0];
        const summaryEl = fixture.debugElement.query(By.css('.p-message-summary'));
        const detailEl = fixture.debugElement.query(By.css('.p-message-detail'));
        expect(messageEl).toBeTruthy();
        expect(iconEl).toBeTruthy();
        expect(summaryEl).toBeTruthy();
        expect(detailEl).toBeTruthy();
        expect(iconEl.nativeElement.tagName.toLowerCase()).toEqual('timescircleicon');
        expect(summaryEl.nativeElement.innerHTML).toEqual('Error Message');
        expect(detailEl.nativeElement.innerHTML).toContain('Validation failed');
    });

    it('should show with service', () => {
        fixture.detectChanges();

        const successButton = fixture.debugElement.queryAll(By.css('button'))[5];
        successButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-message-icon')).children[0];
        const summaryEl = fixture.debugElement.query(By.css('.p-message-summary'));
        const detailEl = fixture.debugElement.query(By.css('.p-message-detail'));
        expect(messageEl).toBeTruthy();
        expect(iconEl).toBeTruthy();
        expect(summaryEl).toBeTruthy();
        expect(detailEl).toBeTruthy();
        expect(iconEl.nativeElement.tagName.toLowerCase()).toEqual('checkicon');
        expect(summaryEl.nativeElement.innerHTML).toEqual('Service Message');
        expect(detailEl.nativeElement.innerHTML).toContain('Via MessageService');
    });

    it('should show multiple with service', () => {
        messages.key = 'primeng';
        fixture.detectChanges();

        const successButton = fixture.debugElement.queryAll(By.css('button'))[6];
        successButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.queryAll(By.css('.p-message-icon'));
        expect(messageEl.length).toEqual(2);
    });

    it('should clear with service', () => {
        messages.key = 'primeng';
        fixture.detectChanges();

        const successButton = fixture.debugElement.queryAll(By.css('button'))[6];
        const clearButton = fixture.debugElement.queryAll(By.css('button'))[7];
        successButton.nativeElement.click();
        fixture.detectChanges();

        clearButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.queryAll(By.css('.p-messages'));
        expect(messageEl.length).toEqual(2);
    });

    it('should clear with service and key', () => {
        messages.key = 'primeng';
        fixture.detectChanges();

        const successButton = fixture.debugElement.queryAll(By.css('button'))[6];
        const clearButton = fixture.debugElement.queryAll(By.css('button'))[8];
        successButton.nativeElement.click();
        fixture.detectChanges();

        clearButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.queryAll(By.css('.p-message-icon'));
        expect(messageEl.length).toEqual(2);
    });

    it('should disable closable messages', () => {
        fixture.detectChanges();

        const closableButton = fixture.debugElement.queryAll(By.css('button'))[9];
        closableButton.nativeElement.click();
        fixture.detectChanges();

        const detailEl = fixture.debugElement.query(By.css('.p-message-detail'));
        const clearButton = fixture.debugElement.query(By.css('.p-message-close'));

        expect(clearButton).toBeFalsy();
        expect(detailEl.nativeElement.innerHTML).toContain('Not closable');
    });
});
