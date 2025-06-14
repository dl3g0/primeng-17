import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TriStateCheckbox } from './tristatecheckbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CheckIcon } from '@dl3g0/primeng/icons/check';
import { TimesIcon } from '@dl3g0/primeng/icons/times';

describe('TriStateCheckbox', () => {
    let tristate: TriStateCheckbox;
    let fixture: ComponentFixture<TriStateCheckbox>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, CheckIcon, TimesIcon],
            declarations: [TriStateCheckbox]
        });

        fixture = TestBed.createComponent(TriStateCheckbox);
        tristate = fixture.componentInstance;
    });

    it('should created by default', () => {
        fixture.detectChanges();

        const tristatecheckboxEl = fixture.debugElement.query(By.css('div'));
        expect(tristatecheckboxEl).toBeTruthy();
    });

    it('should disabled', () => {
        tristate.disabled = true;
        tristate.label = 'Primeng!';
        fixture.detectChanges();

        const toggleSpy = spyOn(tristate, 'toggle').and.callThrough();
        const helperInputEl = fixture.debugElement.query(By.css('.p-hidden-accessible')).children[0].nativeElement;
        const checkBoxEl = fixture.debugElement.query(By.css('.p-checkbox-box')).nativeElement;
        const labelEl = fixture.debugElement.query(By.css('label')).nativeElement;
        checkBoxEl.click();
        fixture.detectChanges();

        expect(helperInputEl.disabled).toEqual(true);
        expect(checkBoxEl.className).toContain('p-disabled');
        expect(labelEl.className).toContain('p-disabled');
        expect(toggleSpy).not.toHaveBeenCalled();
    });

    it('should get a label', () => {
        tristate.label = 'Primeng!';
        fixture.detectChanges();

        const labelEl = fixture.debugElement.query(By.css('label')).nativeElement;
        expect(labelEl.textContent).toContain('Primeng!');
    });

    it('should change stlye and styleClass', () => {
        tristate.styleClass = 'Primeng ROCKS!';
        tristate.style = { height: '300px' };
        fixture.detectChanges();

        const tristatecheckboxEl = fixture.debugElement.query(By.css('div')).nativeElement;
        expect(tristatecheckboxEl.className).toContain('Primeng ROCKS!');
        expect(tristatecheckboxEl.style.height).toContain('300px');
    });

    it('should get a name inputId and tabIndex', () => {
        tristate.label = 'Primeng!';
        tristate.tabindex = 5;
        tristate.inputId = 'Primeng';
        tristate.name = 'Primeng ROCKS!';
        fixture.detectChanges();

        const helperInputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const labelEl = fixture.debugElement.query(By.css('label')).nativeElement;
        expect(helperInputEl.tabIndex).toEqual(5);
        expect(helperInputEl.id).toEqual('Primeng');
        expect(helperInputEl.name).toEqual('Primeng ROCKS!');
        expect(labelEl.htmlFor).toEqual('Primeng');
    });

    it('should value is true when click and listen onChange', () => {
        tristate.label = 'Primeng';
        fixture.detectChanges();

        let value;
        tristate.onChange.subscribe((data) => (value = data));
        const onClickSpy = spyOn(tristate, 'onClick').and.callThrough();
        const checkBoxEl = fixture.debugElement.query(By.css('.p-checkbox-box')).nativeElement;
        const labeEl = fixture.debugElement.query(By.css('label')).nativeElement;
        checkBoxEl.click();
        fixture.detectChanges();

        expect(tristate.value).toEqual(true);
        expect(value.value).toEqual(tristate.value);
        expect(checkBoxEl.className).toContain('p-highlight');

        const checkBoxIconEl = checkBoxEl.children[0];
        expect(checkBoxIconEl.tagName.toLowerCase()).toEqual('checkicon');
        expect(labeEl.className).toContain('p-checkbox-label-active');
        expect(onClickSpy).toHaveBeenCalled();
    });

    it('should value is true when click to label', () => {
        tristate.label = 'Primeng';
        fixture.detectChanges();

        let value;
        tristate.onChange.subscribe((data) => (value = data));
        const onClickSpy = spyOn(tristate, 'onClick').and.callThrough();
        const checkBoxEl = fixture.debugElement.query(By.css('.p-checkbox-box')).nativeElement;
        const labeEl = fixture.debugElement.query(By.css('label')).nativeElement;
        labeEl.click();
        fixture.detectChanges();

        expect(tristate.value).toEqual(true);
        expect(value.value).toEqual(tristate.value);
        expect(checkBoxEl.className).toContain('p-highlight');

        const checkBoxIconEl = checkBoxEl.children[0];
        expect(checkBoxIconEl.tagName.toLowerCase()).toEqual('checkicon');
        expect(labeEl.className).toContain('p-checkbox-label-active');
        expect(onClickSpy).toHaveBeenCalled();
    });

    it('should value is false when click twice', () => {
        tristate.label = 'Primeng';
        fixture.detectChanges();

        let value;
        tristate.onChange.subscribe((data) => (value = data));
        const onClickSpy = spyOn(tristate, 'onClick').and.callThrough();
        const checkBoxEl = fixture.debugElement.query(By.css('.p-checkbox-box')).nativeElement;
        const labeEl = fixture.debugElement.query(By.css('label')).nativeElement;
        checkBoxEl.click();
        checkBoxEl.click();
        fixture.detectChanges();

        expect(tristate.value).toEqual(false);
        expect(value.value).toEqual(tristate.value);
        expect(checkBoxEl.className).toContain('p-highlight');

        const checkBoxIconEl = checkBoxEl.children[0];
        expect(checkBoxIconEl.tagName.toLowerCase()).toEqual('timesicon');
        expect(labeEl.className).toContain('p-checkbox-label-active');
        expect(onClickSpy).toHaveBeenCalledTimes(2);
    });

    it('should value is null when click three time', () => {
        tristate.label = 'Primeng';
        fixture.detectChanges();

        let value;
        tristate.onChange.subscribe((data) => (value = data));
        const onClickSpy = spyOn(tristate, 'onClick').and.callThrough();
        const checkBoxEl = fixture.debugElement.query(By.css('.p-checkbox-box')).nativeElement;
        const labeEl = fixture.debugElement.query(By.css('label')).nativeElement;
        checkBoxEl.click();
        checkBoxEl.click();
        checkBoxEl.click();
        fixture.detectChanges();

        expect(tristate.value).toEqual(null);
        expect(value.value).toEqual(tristate.value);
        expect(checkBoxEl.className).not.toContain('p-highlight');
        expect(labeEl.className).not.toContain('p-checkbox-label-active');
        expect(onClickSpy).toHaveBeenCalledTimes(3);
    });

    it('should call onFocus', () => {
        tristate.label = 'Primeng';
        fixture.detectChanges();

        let value;
        tristate.onChange.subscribe((data) => (value = data));
        const onFocusSpy = spyOn(tristate, 'onFocus').and.callThrough();
        const onBlurSpy = spyOn(tristate, 'onBlur').and.callThrough();
        const inputEl = fixture.debugElement.query(By.css('input'));
        const checkBoxEl = fixture.debugElement.query(By.css('.p-checkbox-box'));
        inputEl.nativeElement.dispatchEvent(new Event('focus'));
        fixture.detectChanges();

        expect(onFocusSpy).toHaveBeenCalled();
        expect(checkBoxEl.nativeElement.className).toContain('p-focus');
        inputEl.nativeElement.dispatchEvent(new Event('blur'));
        fixture.detectChanges();

        expect(onBlurSpy).toHaveBeenCalled();
        expect(checkBoxEl.nativeElement.className).not.toContain('p-focus');
    });

    it('should call onKeyDown', () => {
        tristate.label = 'Primeng';
        fixture.detectChanges();

        let value;
        tristate.onChange.subscribe((data) => (value = data));
        const onKeyDownSpy = spyOn(tristate, 'onKeyDown').and.callThrough();
        const inputEl = fixture.debugElement.query(By.css('input'));
        inputEl.nativeElement.dispatchEvent(new Event('keydown'));
        fixture.detectChanges();

        expect(onKeyDownSpy).toHaveBeenCalled();
        expect(tristate.value).toBeUndefined();
    });
});
