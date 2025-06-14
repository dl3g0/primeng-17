import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UIMessage } from './message';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InfoCircleIcon } from '@dl3g0/primeng/icons/infocircle';
import { ExclamationTriangleIcon } from '@dl3g0/primeng/icons/exclamationtriangle';
import { TimesCircleIcon } from '@dl3g0/primeng/icons/timescircle';
import { CheckIcon } from '@dl3g0/primeng/icons/check';

describe('UIMessage', () => {
    let message: UIMessage;
    let fixture: ComponentFixture<UIMessage>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, InfoCircleIcon, ExclamationTriangleIcon, TimesCircleIcon, CheckIcon],
            declarations: [UIMessage]
        });

        fixture = TestBed.createComponent(UIMessage);
        message = fixture.componentInstance;
    });

    it('should change severity to success and text', () => {
        message.severity = 'success';
        message.text = 'Primeng Rocks!';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        const textEl = fixture.debugElement.query(By.css('.p-inline-message-text'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('p-inline-message-success');
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('checkicon');
        expect(textEl.nativeElement.textContent).toContain('Primeng Rocks!');
    });

    it('should change severity to info', () => {
        message.severity = 'info';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('p-inline-message-info');
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('infocircleicon');
    });

    it('should change severity to danger', () => {
        message.severity = 'danger';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('p-inline-message-danger');
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('timescircleicon');
    });

    it('should change severity to warning', () => {
        message.severity = 'warning';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('p-inline-message-warn');
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('exclamationtriangleicon');
    });

    it('should change severity to default', () => {
        message.severity = 'primary';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('infocircleicon');
    });
});
