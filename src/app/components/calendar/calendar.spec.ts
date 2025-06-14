import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@dl3g0/primeng/api';
import { ButtonModule } from '@dl3g0/primeng/button';
import { Calendar } from './calendar';

describe('Calendar', () => {
    let calendar: Calendar;
    let fixture: ComponentFixture<Calendar>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [NoopAnimationsModule, FormsModule, SharedModule, ButtonModule],
            declarations: [Calendar]
        });

        fixture = TestBed.createComponent(Calendar);
        calendar = fixture.componentInstance;
    });

    it('should created by default', () => {
        fixture.detectChanges();

        const calendarEl = fixture.debugElement.query(By.css('span'));
        expect(calendarEl).toBeTruthy();
    });

    it('should change styleClass', () => {
        calendar.styleClass = 'Primeng ROCKS!';
        fixture.detectChanges();

        const calendarEl = fixture.debugElement.query(By.css('span'));
        expect(calendarEl.nativeElement.className).toContain('Primeng ROCKS!');
    });

    it('should change inputStyleClass', () => {
        calendar.inputStyleClass = 'Primeng ROCKS!';
        fixture.detectChanges();

        const calendarEl = fixture.debugElement.query(By.css('input'));
        expect(calendarEl.nativeElement.className).toContain('Primeng ROCKS!');
    });

    it('should change panelStyle and panelStyleClass', () => {
        calendar.panelStyleClass = 'Primeng ROCKS!';
        calendar.panelStyle = { height: '300px' };
        calendar.overlayVisible = true;
        fixture.detectChanges();

        const panelEl = fixture.debugElement.query(By.css('div'));
        expect(panelEl.nativeElement.className).toContain('Primeng ROCKS!');
        expect(panelEl.nativeElement.style.height).toContain('300px');
    });

    it('should change inputId', () => {
        calendar.inputId = 'PRIMENG';
        fixture.detectChanges();

        const calendarEl = fixture.debugElement.query(By.css('input'));
        expect(calendarEl.nativeElement.id).toContain('PRIMENG');
    });

    it('should change name', () => {
        calendar.name = 'PRIMENG';
        fixture.detectChanges();

        const calendarEl = fixture.debugElement.query(By.css('input'));
        expect(calendarEl.nativeElement.name).toContain('PRIMENG');
    });

    it('should change placeholder', () => {
        calendar.placeholder = 'PRIMENG';
        fixture.detectChanges();

        const calendarEl = fixture.debugElement.query(By.css('input'));
        expect(calendarEl.nativeElement.placeholder).toContain('PRIMENG');
    });

    it('should show icon', () => {
        calendar.showIcon = true;
        fixture.detectChanges();

        const calendarEl = fixture.debugElement.query(By.css('span'));
        const buttonEl = fixture.debugElement.query(By.css('button'));
        expect(calendarEl.nativeElement.className).toContain('p-calendar-w-btn');
        expect(buttonEl.nativeNode.outerHTML).toContain('calendaricon');
    });

    it('should change icon', () => {
        calendar.showIcon = true;
        calendar.icon = 'Primeng ROCKS!';
        fixture.detectChanges();

        const buttonEl = fixture.debugElement.query(By.css('button'));
        expect(buttonEl.nativeNode.outerHTML).toContain('Primeng ROCKS!');
    });

    it('should show panel and call onInputClick when inputClick', () => {
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const itemClickSpy = spyOn(calendar, 'onInputClick').and.callThrough();
        const focusSpy = spyOn(calendar, 'onInputFocus').and.callThrough();
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();
        const panelEl = fixture.debugElement.query(By.css('div'));

        expect(itemClickSpy).toHaveBeenCalled();
        expect(focusSpy).toHaveBeenCalled();
        expect(panelEl).toBeTruthy();
        expect(calendar.overlayVisible).toEqual(true);
    });

    it('should show panel and call onButtonClick', () => {
        calendar.showIcon = true;
        fixture.detectChanges();

        const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
        const onButtonClickSpy = spyOn(calendar, 'onButtonClick').and.callThrough();
        buttonEl.click();
        fixture.detectChanges();

        const panelEl = fixture.debugElement.query(By.css('div'));
        expect(panelEl).toBeTruthy();
        expect(calendar.overlayVisible).toEqual(true);
        expect(onButtonClickSpy).toHaveBeenCalled();
    });

    it('should show panel', () => {
        calendar.inline = true;
        fixture.detectChanges();

        const panelEl = fixture.debugElement.query(By.css('div'));
        expect(panelEl).toBeTruthy();
        expect(panelEl.nativeElement.className).toContain('p-datepicker-inline');
    });

    it('should select next month and call navForward', () => {
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        const currentMonth = calendar.currentMonth;
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const navForwardSpy = spyOn(calendar, 'navForward').and.callThrough();
        const nextMonthEl = fixture.debugElement.query(By.css('.p-datepicker-next'));
        nextMonthEl.nativeElement.click();
        fixture.detectChanges();

        const currentMonthEl = fixture.debugElement.query(By.css('.p-datepicker-month'));
        expect(currentMonth).not.toEqual(calendar.currentMonth);
        expect(navForwardSpy).toHaveBeenCalled();
    });

    it('should select pre month and call navBackward', () => {
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        const currentMonth = calendar.currentMonth;
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const navBackwardSpy = spyOn(calendar, 'navBackward').and.callThrough();
        const preMonthEl = fixture.debugElement.query(By.css('.p-datepicker-prev'));
        preMonthEl.nativeElement.click();
        fixture.detectChanges();

        expect(currentMonth).not.toEqual(calendar.currentMonth);
        expect(navBackwardSpy).toHaveBeenCalled();
    });

    it('should select date when click', fakeAsync(() => {
        const date = new Date(2017, 8, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const onDateSelectSpy = spyOn(calendar, 'onDateSelect').and.callThrough();
        const calendarContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const sampleDateEls = calendarContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        expect(calendar.dateTemplate).toBeFalsy();
        sampleDateEls[7].nativeElement.click();
        fixture.detectChanges();

        const datesEl = calendarContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        expect(calendar.inputFieldValue).toEqual(inputEl.value);
        expect(onDateSelectSpy).toHaveBeenCalled();
        for (let x = 0; x < datesEl.length; x++) {
            if (x == 7) expect(datesEl[x].nativeElement.className).toContain('p-highlight');
            else expect(datesEl[x].nativeElement.className).not.toContain('p-highlight');
        }
        expect(calendar.isSingleSelection()).toEqual(true);
        tick(150);
        expect(calendar.overlayVisible).toEqual(false);
        flush();
    }));

    it('should change date format', () => {
        calendar.dateFormat = 'dd/mm/yy';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const onDateSelectSpy = spyOn(calendar, 'onDateSelect').and.callThrough();
        const calendarContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const sampleDateEl = calendarContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'))[7].nativeElement;
        sampleDateEl.click();
        fixture.detectChanges();

        expect(calendar.inputFieldValue).toEqual(inputEl.value);
        if (calendar.currentMonth < 9) expect(calendar.inputFieldValue).toEqual('08/0' + (calendar.currentMonth + 1) + '/' + calendar.currentYear);
        else expect(calendar.inputFieldValue).toEqual('08/' + (calendar.currentMonth + 1) + '/' + calendar.currentYear);
        expect(onDateSelectSpy).toHaveBeenCalled();
    });

    it('should use min and max date', () => {
        let minDate: Date;
        let maxDate: Date;
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = month === 0 ? 11 : month - 1;
        let prevYear = prevMonth === 11 ? year - 1 : year;
        let nextMonth = month === 11 ? 0 : month + 1;
        let nextYear = nextMonth === 0 ? year + 1 : year;
        minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);
        calendar.minDate = minDate;
        calendar.maxDate = maxDate;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const nextMonthEl = fixture.debugElement.query(By.css('.p-datepicker-next'));
        nextMonthEl.nativeElement.click();
        nextMonthEl.nativeElement.click();
        fixture.detectChanges();

        const containerEl = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const unselectableEls = containerEl.queryAll(By.css('.p-disabled'));
        expect(unselectableEls).toBeTruthy();
        expect(unselectableEls.length).toBeGreaterThan(30);
    });

    it('should use invalidDates', () => {
        let invalidDates: Array<Date>;
        let invalidDate = new Date();
        invalidDate.setDate(15);
        let invalidDate2 = new Date();
        invalidDate2.setDate(invalidDate.getDate() - 1);
        invalidDates = [invalidDate, invalidDate2];
        calendar.disabledDates = invalidDates;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const containerEl = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const unselectableEls = containerEl.queryAll(By.css('.p-disabled'));
        let invalidDateArray = [];
        for (let el of unselectableEls) {
            if (el.nativeElement.textContent == invalidDate.getDate() || el.nativeElement.textContent == invalidDate2.getDate()) {
                invalidDateArray.push(el.nativeElement.textContent);
            }
        }
        expect(invalidDateArray.length).toEqual(2);
    });

    it('should use disabledays', () => {
        calendar.disabledDays = [0, 6];
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        for (let week of calendar.months[0].dates) {
            expect(week[0].selectable).toEqual(false);
            expect(week[6].selectable).toEqual(false);
        }
    });

    it('should show time', () => {
        const date = new Date(2017, 8, 23, 15, 12);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        const updateInputfieldSpy = spyOn(calendar, 'updateInputfield').and.callThrough();
        calendar.showTime = true;
        calendar.monthNavigator = true;
        calendar.yearNavigator = true;
        calendar.yearRange = '2000:2030';
        fixture.detectChanges();

        expect(updateInputfieldSpy).toHaveBeenCalled();
        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        let defaultHour = calendar.currentHour;
        let defaultMinute = calendar.currentMinute;
        const incrementHourSpy = spyOn(calendar, 'incrementHour').and.callThrough();
        const decrementHourSpy = spyOn(calendar, 'decrementHour').and.callThrough();
        const incrementMinuteSpy = spyOn(calendar, 'incrementMinute').and.callThrough();
        const decrementMinuteSpy = spyOn(calendar, 'decrementMinute').and.callThrough();
        const navigators = fixture.debugElement.query(By.css('.p-datepicker-title')).queryAll(By.css('select'));
        const timers = fixture.debugElement.query(By.css('.p-timepicker')).queryAll(By.css('div'));
        const hourPicker = timers[0];
        const minutePicker = timers[2];
        const incrementHourEl = hourPicker.queryAll(By.css('.p-link'))[0];
        const decrementHourEl = hourPicker.queryAll(By.css('.p-link'))[1];
        const incrementMinuteEl = minutePicker.queryAll(By.css('.p-link'))[0];
        const decrementMinuteEl = minutePicker.queryAll(By.css('.p-link'))[1];
        incrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).not.toEqual(defaultHour.toString());
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).not.toEqual(defaultMinute.toString());
        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual(calendar.currentHour.toString());
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual(calendar.currentMinute.toString());
        expect(calendar.currentMinute).toEqual(13);
        expect(calendar.currentHour).toEqual(16);
        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[7].nativeElement.click();
        fixture.detectChanges();

        expect(incrementHourSpy).toHaveBeenCalled();
        expect(decrementHourSpy).toHaveBeenCalled();
        expect(decrementMinuteSpy).toHaveBeenCalled();
        expect(incrementMinuteSpy).toHaveBeenCalled();
        expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toEqual(calendar.inputFieldValue);
    });

    it('should only time', () => {
        calendar.timeOnly = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const spanEl = fixture.debugElement.query(By.css('span')).nativeElement;
        const panelEl = fixture.debugElement.query(By.css('div')).nativeElement;
        expect(spanEl.className).toContain('p-calendar-timeonly');
        expect(panelEl.className).toContain('p-datepicker-timeonly');
        let defaultHour = calendar.currentHour;
        let defaultMinute = calendar.currentMinute;
        const timers = fixture.debugElement.query(By.css('.p-timepicker')).queryAll(By.css('div'));
        const hourPicker = timers[0];
        const minutePicker = timers[2];
        const incrementHourEl = hourPicker.queryAll(By.css('.p-link'))[0];
        const decrementHourEl = hourPicker.queryAll(By.css('.p-link'))[1];
        const incrementMinuteEl = minutePicker.queryAll(By.css('.p-link'))[0];
        const decrementMinuteEl = minutePicker.queryAll(By.css('.p-link'))[1];
        incrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).not.toEqual(defaultHour.toString());
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).not.toEqual(defaultMinute.toString());
        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toContain(calendar.currentHour.toString());
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).toContain(calendar.currentMinute.toString());
        expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toEqual(calendar.inputFieldValue);
    });

    it('should select multiple', () => {
        calendar.defaultDate = new Date(2017, 8, 23, 11, 12);
        jasmine.clock().mockDate(new Date(2017, 8, 23, 11, 12));
        calendar.selectionMode = 'multiple';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[7].nativeElement.click();
        fixture.detectChanges();

        expect(calendar.overlayVisible).toEqual(true);
        dates[8].nativeElement.click();
        fixture.detectChanges();

        dates[9].nativeElement.click();
        fixture.detectChanges();

        dates[9].nativeElement.click();
        fixture.detectChanges();

        expect(inputEl.value).toEqual(calendar.inputFieldValue);
        expect(calendar.value.length).toEqual(2);
        expect(calendar.inputFieldValue).toEqual('09/08/2017, 09/09/2017');
    });

    it('should select multiple with dataType string', () => {
        calendar.defaultDate = new Date(2017, 8, 23, 11, 12);
        jasmine.clock().mockDate(new Date(2017, 8, 23, 11, 12));
        calendar.selectionMode = 'multiple';
        calendar.dataType = 'string';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[7].nativeElement.click();
        fixture.detectChanges();

        expect(calendar.overlayVisible).toEqual(true);
        dates[8].nativeElement.click();
        fixture.detectChanges();

        dates[9].nativeElement.click();
        fixture.detectChanges();

        dates[9].nativeElement.click();
        fixture.detectChanges();

        expect(inputEl.value).toEqual(calendar.inputFieldValue);
        expect(calendar.value.length).toEqual(2);
        expect(calendar.inputFieldValue).toEqual('09/08/2017, 09/09/2017');
    });

    it('should select today and clear input with button bar', fakeAsync(() => {
        calendar.showButtonBar = true;

        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const onClearButtonClickSpy = spyOn(calendar, 'onClearButtonClick').and.callThrough();
        const onTodayButtonClickSpy = spyOn(calendar, 'onTodayButtonClick').and.callThrough();
        const buttonbar = fixture.debugElement.query(By.css('.p-datepicker-buttonbar'));
        const todayButtonEl = buttonbar.queryAll(By.css('button'))[0];
        const clearButtonEl = buttonbar.queryAll(By.css('button'))[1];
        expect(buttonbar).toBeTruthy();
        todayButtonEl.nativeElement.click();
        fixture.detectChanges();

        tick(150);
        expect(calendar.overlayVisible).toEqual(false);
        expect(calendar.inputFieldValue).toBeTruthy();
        expect(inputEl.value).toEqual(calendar.inputFieldValue);
        expect(onTodayButtonClickSpy).toHaveBeenCalled();
        expect(calendar.value).not.toEqual(null);
        clearButtonEl.nativeElement.click();
        fixture.detectChanges();
        flush();

        tick(150);
        expect(calendar.overlayVisible).toEqual(false);
        expect(calendar.inputFieldValue).toBeFalsy();
        expect(inputEl.value).toEqual('');
        expect(calendar.value).toEqual(null);
        expect(onClearButtonClickSpy).toHaveBeenCalled();
        flush();
    }));

    it('should change today & clear button styleClass', () => {
        calendar.showButtonBar = true;
        calendar.clearButtonStyleClass = 'Primeng ROCKS!';
        calendar.todayButtonStyleClass = 'Primeng ROCKS!';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const buttonbar = fixture.debugElement.query(By.css('.p-datepicker-buttonbar'));
        const todayButtonEl = buttonbar.queryAll(By.css('button'))[0];
        const clearButtonEl = buttonbar.queryAll(By.css('button'))[1];
        expect(todayButtonEl.nativeElement.className).toContain('Primeng ROCKS!');
        expect(clearButtonEl.nativeElement.className).toContain('Primeng ROCKS!');
    });

    it('should show multiple months', () => {
        calendar.numberOfMonths = 3;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const panelEl = fixture.debugElement.query(By.css('div'));
        const contentEls = fixture.debugElement.queryAll(By.css('.p-datepicker-group'));
        const selectEls = fixture.debugElement.queryAll(By.css('select'));
        expect(panelEl.nativeElement.className).toContain('p-datepicker-multiple-month');
        expect(contentEls.length).toEqual(3);
        expect(selectEls.length).toEqual(0);
    });

    it('should show month picker', fakeAsync(() => {
        calendar.view = 'month';
        calendar.dateFormat = 'mm';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const onMonthSelectSpy = spyOn(calendar, 'onMonthSelect').and.callThrough();
        const panelEl = fixture.debugElement.query(By.css('div')).nativeElement;
        const monthpickerEl = fixture.debugElement.query(By.css('.p-monthpicker'));
        const janEl = monthpickerEl.query(By.css('span')).nativeElement;
        expect(monthpickerEl).toBeTruthy();
        expect(panelEl.className).toContain('p-datepicker-monthpicker');
        expect(janEl.textContent).toContain('Jan');
        janEl.click();
        fixture.detectChanges();

        tick(200);
        expect(onMonthSelectSpy).toHaveBeenCalled();
        expect(calendar.value).toBeTruthy();
        expect(janEl.className).toContain('p-highlight');
        expect(calendar.inputFieldValue).toEqual('01');
        flush();
    }));

    it('should use min date and max date with month picker', fakeAsync(() => {
        calendar.view = 'month';
        calendar.dateFormat = 'mm';
        const today = new Date();
        const minDate = new Date(today.getFullYear(), today.getMonth(), 2);
        const maxDate = new Date(today.getFullYear(), today.getMonth(), 20);
        calendar.minDate = minDate;
        calendar.maxDate = maxDate;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const monthpickerEl = fixture.debugElement.query(By.css('.p-monthpicker'));
        const currentMonth = monthpickerEl.children[today.getMonth()];
        const unselectableMonths = monthpickerEl.queryAll(By.css('.p-disabled'));
        expect(currentMonth.classes['.p-disabled']).toBeFalsy();
        expect(unselectableMonths.length).toEqual(11);

        currentMonth.nativeElement.click();
        fixture.detectChanges();
        tick(200);

        expect(+calendar.inputFieldValue).toEqual(today.getMonth() + 1);
        flush();
    }));

    it('should use touchUI', fakeAsync(() => {
        calendar.touchUI = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const onOverlayAnimationStartSpy = spyOn(calendar, 'onOverlayAnimationStart').and.callThrough();
        const onDateSelectSpy = spyOn(calendar, 'onDateSelect').and.callThrough();
        const panelEl = fixture.debugElement.query(By.css('div')).nativeElement;
        const containerEl = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const firstDayEl = containerEl.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'))[0].nativeElement;
        expect(panelEl.className).toContain('p-datepicker-touch-ui');
        firstDayEl.click();
        fixture.detectChanges();

        tick(150);
        expect(calendar.overlayVisible).toEqual(false);
        if (calendar.currentMonth < 9) expect(calendar.inputFieldValue).toEqual('0' + (calendar.currentMonth + 1) + '/01/' + calendar.currentYear);
        else expect(calendar.inputFieldValue).toEqual(calendar.currentMonth + 1 + '/01/' + calendar.currentYear);
        expect(inputEl.value).toEqual(calendar.inputFieldValue);
        expect(onDateSelectSpy).toHaveBeenCalled();
        expect(onOverlayAnimationStartSpy).toHaveBeenCalled();
        calendar.destroyMask();
        tick(300);
        flush();
    }));

    it('should select date with keyboardEvent', () => {
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        calendar.isKeydown = true;
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const updateModelSpy = spyOn(calendar, 'updateModel').and.callThrough();
        const updateUISpy = spyOn(calendar, 'updateUI').and.callThrough();
        const event = { target: { value: '07/01/2008' } };
        calendar.onUserInput(event);
        fixture.detectChanges();

        calendar.cd.detectChanges();
        const containerEl = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const firstEl = containerEl.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'))[0].nativeElement;
        const monthSpanEl = fixture.debugElement.query(By.css('.p-datepicker-month')).nativeElement;
        const yearSpanEl = fixture.debugElement.query(By.css('.p-datepicker-year')).nativeElement;
        expect(updateUISpy).toHaveBeenCalled();
        expect(updateModelSpy).toHaveBeenCalled();
        expect(calendar.currentMonth).toEqual(6);
        expect(calendar.currentYear).toEqual(2008);
        expect(firstEl.className).toContain('p-highlight');
        expect(monthSpanEl.textContent).toContain('July');
        expect(yearSpanEl.textContent).toContain('2008');
    });

    it('should listen onfocus', () => {
        fixture.detectChanges();

        let focusvalue;
        calendar.onFocus.subscribe((value) => (focusvalue = value));
        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        calendar.isKeydown = true;
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        expect(focusvalue).toBeTruthy();
    });

    it('should listen onselect', () => {
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        let onselectValue;
        calendar.onSelect.subscribe((value) => (onselectValue = value));
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const calendarContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const sampleDateEl = calendarContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'))[7].nativeElement;
        sampleDateEl.click();
        fixture.detectChanges();

        expect(onselectValue).toBeTruthy();
    });

    it('should listen onInput', () => {
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        let onInputValue;
        calendar.onInput.subscribe((value) => (onInputValue = value));
        inputEl.click();
        calendar.isKeydown = true;
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const event = { target: { value: '07/01/2008' } };
        calendar.onUserInput(event);
        fixture.detectChanges();

        expect(onInputValue).toBeTruthy();
    });

    it('should listen onToday and onClear', () => {
        calendar.showButtonBar = true;
        fixture.detectChanges();
        let onTodayValue;
        calendar.onTodayClick.subscribe((value) => (onTodayValue = value));
        let onClearValue;
        calendar.onClearClick.subscribe((value) => (onClearValue = value));
        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');

        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const buttonbar = fixture.debugElement.query(By.css('.p-datepicker-buttonbar'));
        const todayButtonEl = buttonbar.queryAll(By.css('button'))[0];
        const clearButtonEl = buttonbar.queryAll(By.css('button'))[1];
        todayButtonEl.nativeElement.click();
        fixture.detectChanges();

        clearButtonEl.nativeElement.click();
        fixture.detectChanges();

        expect(onTodayValue).toBeTruthy();
        expect(onClearValue).toBeTruthy();
    });

    it('should listen onMonthChange', () => {
        fixture.detectChanges();

        let onMonthChangeValue;
        calendar.onMonthChange.subscribe((value) => (onMonthChangeValue = value));
        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const nextMonthEl = fixture.debugElement.query(By.css('.p-datepicker-next'));
        nextMonthEl.nativeElement.click();
        fixture.detectChanges();

        expect(onMonthChangeValue).toBeTruthy();
    });

    it('should show hourFormat', () => {
        const date = new Date(2018, 9, 23, 15, 12);
        jasmine.clock().mockDate(date);
        fixture.detectChanges();

        calendar.hourFormat = '12';
        calendar.showTime = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');

        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const amPmEl = fixture.debugElement.query(By.css('.p-ampm-picker'));
        const hourPicker = fixture.debugElement.query(By.css('.p-hour-picker'));
        const minutePicker = fixture.debugElement.query(By.css('.p-minute-picker'));
        expect(calendar.pm).toEqual(true);
        expect(amPmEl).toBeTruthy();
        expect(amPmEl.children[1].nativeElement.textContent).toEqual('PM');
        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('03');
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('12');
    });

    it('should change hourFormat', () => {
        const date = new Date(2018, 9, 23, 11, 12);
        jasmine.clock().mockDate(date);
        fixture.detectChanges();

        calendar.hourFormat = '12';
        calendar.showTime = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');

        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const amPmEl = fixture.debugElement.query(By.css('.p-ampm-picker'));
        const hourPicker = fixture.debugElement.query(By.css('.p-hour-picker'));
        const incrementHour = hourPicker.query(By.css('button'));
        const decrementHour = hourPicker.queryAll(By.css('button'))[1];

        expect(decrementHour).toBeTruthy();
        expect(incrementHour).toBeTruthy();
        expect(calendar.pm).toEqual(false);
        expect(amPmEl.children[1].nativeElement.textContent).toEqual('AM');
        incrementHour.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementHour.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(calendar.pm).toEqual(true);
        expect(amPmEl.children[1].nativeElement.textContent).toEqual('PM');
        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('12');
        decrementHour.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementHour.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(calendar.pm).toEqual(false);
        expect(amPmEl.children[1].nativeElement.textContent).toEqual('AM');
        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('11');
    });

    it('should change hourFormat with ampm buttons', () => {
        const date = new Date(2018, 9, 23, 11, 12);
        jasmine.clock().mockDate(date);
        fixture.detectChanges();

        calendar.hourFormat = '12';
        calendar.showTime = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');

        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const amPmEl = fixture.debugElement.query(By.css('.p-ampm-picker'));
        const changeFormatEl = amPmEl.query(By.css('button'));
        const toggleAMPMSpy = spyOn(calendar, 'toggleAMPM').and.callThrough();
        expect(calendar.pm).toEqual(false);
        expect(amPmEl.children[1].nativeElement.textContent).toEqual('AM');
        changeFormatEl.nativeElement.click();
        fixture.detectChanges();

        expect(calendar.pm).toEqual(true);
        expect(amPmEl.children[1].nativeElement.textContent).toEqual('PM');
        expect(toggleAMPMSpy).toHaveBeenCalled();
        changeFormatEl.nativeElement.click();
        fixture.detectChanges();

        expect(calendar.pm).toEqual(false);
        expect(amPmEl.children[1].nativeElement.textContent).toEqual('AM');
        expect(toggleAMPMSpy).toHaveBeenCalledTimes(2);
    });

    it('should set defaultDate', () => {
        calendar.defaultDate = new Date(2017, 8, 23, 11, 12);
        jasmine.clock().mockDate(new Date(2017, 8, 23, 11, 12));
        calendar.showTime = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');

        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const hourPicker = fixture.debugElement.query(By.css('.p-hour-picker'));
        const minutePicker = fixture.debugElement.query(By.css('.p-minute-picker'));
        const yearEl = fixture.debugElement.query(By.css('.p-datepicker-year'));
        const monthEl = fixture.debugElement.query(By.css('.p-datepicker-month'));
        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('11');
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('12');
        expect(yearEl.nativeElement.textContent).toContain('2017');
        expect(monthEl.nativeElement.textContent).toContain('September');
        expect(calendar.currentMonth).toEqual(8);
        expect(calendar.currentHour).toEqual(11);
        expect(calendar.currentMinute).toEqual(12);
        expect(calendar.currentYear).toEqual(2017);
    });

    it('should show seconds', () => {
        const date = new Date(2017, 8, 23, 11, 12, 21);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.showTime = true;
        calendar.showSeconds = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');

        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const separatorEl = fixture.debugElement.queryAll(By.css('.p-separator'));
        const secondPicker = fixture.debugElement.query(By.css('.p-second-picker'));
        expect(separatorEl.length).toEqual(2);
        expect(calendar.showSeconds).toBeTruthy();
        expect(separatorEl[0]).toBeTruthy();
        expect(separatorEl[1]).toBeTruthy();
        expect(separatorEl[0].children[0].nativeElement.textContent).toEqual(':');
        expect(separatorEl[1].children[0].nativeElement.textContent).toEqual(':');
        expect(secondPicker).toBeTruthy();
        expect(secondPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('21');
    });

    it('should change seconds', () => {
        const date = new Date(2017, 8, 23, 11, 12, 21);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.showTime = true;
        calendar.showSeconds = true;
        fixture.detectChanges();

        const incrementSecondSpy = spyOn(calendar, 'incrementSecond').and.callThrough();
        const decrementSecondSpy = spyOn(calendar, 'decrementSecond').and.callThrough();
        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const secondPicker = fixture.debugElement.query(By.css('.p-second-picker'));
        const incrementSecond = secondPicker.query(By.css('button'));
        const decrementSecond = secondPicker.queryAll(By.css('button'))[1];
        incrementSecond.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementSecond.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(secondPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('22');
        expect(incrementSecondSpy).toHaveBeenCalled();
        fixture.detectChanges();

        decrementSecond.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementSecond.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(secondPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('21');
        expect(decrementSecondSpy).toHaveBeenCalled();
    });

    it('should change stepSecond stepHour and stepMinute', () => {
        const date = new Date(2017, 8, 23, 11, 12, 21);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.showTime = true;
        calendar.showSeconds = true;
        calendar.stepHour = 2;
        calendar.stepMinute = 2;
        calendar.stepSecond = 2;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');

        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const secondPicker = fixture.debugElement.query(By.css('.p-second-picker'));
        const incrementSecond = secondPicker.query(By.css('button'));
        const decrementSecond = secondPicker.queryAll(By.css('button'))[1];
        const hourPicker = fixture.debugElement.query(By.css('.p-hour-picker'));
        const incrementHour = hourPicker.query(By.css('button'));
        const decrementHour = hourPicker.queryAll(By.css('button'))[1];
        const minutePicker = fixture.debugElement.query(By.css('.p-minute-picker'));
        const incrementMinute = minutePicker.query(By.css('button'));
        const decrementMinute = minutePicker.queryAll(By.css('button'))[1];
        incrementHour.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementHour.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementMinute.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementMinute.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementSecond.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementSecond.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('13');
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('14');
        expect(secondPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('23');
        expect(calendar.currentHour).toEqual(13);
        expect(calendar.currentMinute).toEqual(14);
        expect(calendar.currentSecond).toEqual(23);
        decrementHour.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementHour.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementMinute.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementMinute.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementSecond.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementSecond.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('11');
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('12');
        expect(secondPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('21');
        expect(calendar.currentHour).toEqual(11);
        expect(calendar.currentMinute).toEqual(12);
        expect(calendar.currentSecond).toEqual(21);
    });

    it('should change stepSecond stepHour and stepMinute (out of border values)', () => {
        const date = new Date(2017, 8, 23, 22, 58, 58);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.showTime = true;
        calendar.showSeconds = true;
        calendar.stepHour = 5;
        calendar.stepMinute = 5;
        calendar.stepSecond = 5;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');

        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const secondPicker = fixture.debugElement.query(By.css('.p-second-picker'));
        const incrementSecond = secondPicker.query(By.css('button'));
        const decrementSecond = secondPicker.queryAll(By.css('button'))[1];
        const hourPicker = fixture.debugElement.query(By.css('.p-hour-picker'));
        const incrementHour = hourPicker.query(By.css('button'));
        const decrementHour = hourPicker.queryAll(By.css('button'))[1];
        const minutePicker = fixture.debugElement.query(By.css('.p-minute-picker'));
        const incrementMinute = minutePicker.query(By.css('button'));
        const decrementMinute = minutePicker.queryAll(By.css('button'))[1];
        incrementHour.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementHour.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementMinute.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementMinute.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementSecond.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementSecond.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('03');
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('03');
        expect(secondPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('03');
        expect(calendar.currentHour).toEqual(3);
        expect(calendar.currentMinute).toEqual(3);
        expect(calendar.currentSecond).toEqual(3);
        decrementHour.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementHour.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementMinute.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementMinute.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementSecond.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementSecond.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('22');
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('58');
        expect(secondPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('58');
        expect(calendar.currentHour).toEqual(22);
        expect(calendar.currentMinute).toEqual(58);
        expect(calendar.currentSecond).toEqual(58);
    });

    it('should change showOnFocus', () => {
        calendar.showOnFocus = false;
        const showOverlaySpy = spyOn(calendar, 'showOverlay').and.callThrough();
        const onOverlayAnimationStartSpy = spyOn(calendar, 'onOverlayAnimationStart').and.callThrough();
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const panelEl = fixture.debugElement.query(By.css('.p-datepicker'));
        expect(showOverlaySpy).not.toHaveBeenCalled();
        expect(onOverlayAnimationStartSpy).not.toHaveBeenCalled();
        expect(calendar.overlayVisible).toBeUndefined();
        expect(panelEl).toBeFalsy();
    });

    it('should change dataType', () => {
        const date = new Date(2017, 8, 23, 11, 12, 21);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.dataType = 'string';
        const formatDateTimeSpy = spyOn(calendar, 'formatDateTime').and.callThrough();
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[7].nativeElement.click();
        fixture.detectChanges();

        expect(formatDateTimeSpy).toHaveBeenCalled();
        expect(calendar.dataType).toEqual('string');
    });

    it('should single select ', () => {
        const date = new Date(2017, 8, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        const onDateSelectSpy = spyOn(calendar, 'onDateSelect').and.callThrough();
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[7].nativeElement.click();
        fixture.detectChanges();

        const pickedDate = new Date(2017, 8, 8);
        expect(calendar.value).toEqual(pickedDate);
        expect(onDateSelectSpy).toHaveBeenCalled();
    });

    it('should change maxDateCount ', () => {
        const date = new Date(2017, 8, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        const onDateSelectSpy = spyOn(calendar, 'onDateSelect').and.callThrough();
        calendar.maxDateCount = 2;
        calendar.selectionMode = 'multiple';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[7].nativeElement.click();
        dates[9].nativeElement.click();
        dates[11].nativeElement.click();
        fixture.detectChanges();

        expect(onDateSelectSpy).toHaveBeenCalled();
        expect(calendar.value.length).toEqual(2);
    });

    it('should disabled(inline false)', () => {
        calendar.disabled = true;
        calendar.showIcon = true;
        fixture.detectChanges();

        calendar.cd.detectChanges();
        const inputEl = fixture.debugElement.query(By.css('input'));
        const buttonEl = fixture.debugElement.query(By.css('button'));
        expect(buttonEl.nativeElement.disabled).toEqual(true);
        expect(inputEl.nativeElement.disabled).toEqual(true);
    });

    it('should disabled(inline true)', () => {
        calendar.disabled = true;
        calendar.inline = true;
        fixture.detectChanges();

        const datePicker = fixture.debugElement.query(By.css('.p-datepicker'));
        expect(datePicker.nativeElement.className).toContain('p-disabled');

        const incrementYearSpy = spyOn(calendar, 'incrementYear').and.callThrough();
        const decrementYearSpy = spyOn(calendar, 'decrementYear').and.callThrough();
        const createMonthsSpy = spyOn(calendar, 'createMonths').and.callThrough();
        const preMonthEl = fixture.debugElement.query(By.css('.p-datepicker-prev'));
        preMonthEl.nativeElement.click();
        const nextMonthEl = fixture.debugElement.query(By.css('.p-datepicker-next'));
        nextMonthEl.nativeElement.click();
        fixture.detectChanges();

        expect(incrementYearSpy).not.toHaveBeenCalled();
        expect(decrementYearSpy).not.toHaveBeenCalled();
        expect(createMonthsSpy).not.toHaveBeenCalled();
        const calendarContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const sampleDateEls = calendarContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        const updateInputfieldSpy = spyOn(calendar, 'updateInputfield').and.callThrough();
        const selectDateSpy = spyOn(calendar, 'selectDate').and.callThrough();
        const updateModelSpy = spyOn(calendar, 'updateModel').and.callThrough();
        sampleDateEls[7].nativeElement.click();
        fixture.detectChanges();

        expect(updateInputfieldSpy).not.toHaveBeenCalled();
        expect(createMonthsSpy).not.toHaveBeenCalled();
        expect(selectDateSpy).not.toHaveBeenCalled();
        expect(updateModelSpy).not.toHaveBeenCalled();
    });

    it('should listen onBlur', () => {
        fixture.detectChanges();

        let blurValue;
        calendar.onBlur.subscribe((value) => (blurValue = value));
        const onInputBlurSpy = spyOn(calendar, 'onInputBlur').and.callThrough();
        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        const blurEvent = new Event('blur');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        inputEl.nativeElement.dispatchEvent(blurEvent);
        fixture.detectChanges();

        expect(blurValue).toBeTruthy();
        expect(blurValue.type).toEqual('blur');
        expect(onInputBlurSpy).toHaveBeenCalled();
    });

    it('should change readonlyInput', () => {
        calendar.readonlyInput = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input'));
        expect(inputEl.nativeElement.readOnly).toEqual(true);
    });

    it('should change selectOtherMonths', () => {
        const date = new Date(2017, 8, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.selectOtherMonths = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        expect(dates.length).toEqual(35);
        dates[0].nativeElement.click();
        fixture.detectChanges();

        expect(calendar.value.getMonth()).toEqual(7);
    });

    it('should change showOtherMonths', () => {
        calendar.showOtherMonths = false;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        const otherMonthDates = datesContainer.queryAll(By.css('.p-datepicker-other-month'));
        for (let otherMonthDate of otherMonthDates) {
            expect(otherMonthDate.children.length).toEqual(0);
            expect(otherMonthDate.children).toEqual([]);
        }
    });

    it('should change selectionMode', () => {
        const date = new Date(2017, 8, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.selectionMode = 'range';
        calendar.showTime = true;
        calendar.showSeconds = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[0].nativeElement.click();
        dates[5].nativeElement.click();
        fixture.detectChanges();

        expect(calendar.value.length).toEqual(2);
    });

    it('should change selectionMode (range max date first pick)', () => {
        const date = new Date(2017, 8, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.selectionMode = 'range';
        calendar.showTime = true;
        calendar.showSeconds = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[5].nativeElement.click();
        fixture.detectChanges();

        dates[0].nativeElement.click();
        fixture.detectChanges();

        expect(calendar.value).toBeTruthy();
        expect(calendar.value.length).toEqual(2);
        expect(calendar.value[1]).toBeNull();
    });

    it('should change selectionMode (range three times pick)', () => {
        const date = new Date(2017, 8, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.selectionMode = 'range';
        calendar.showTime = true;
        calendar.showSeconds = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[0].nativeElement.click();
        fixture.detectChanges();

        dates[5].nativeElement.click();
        fixture.detectChanges();

        dates[8].nativeElement.click();
        fixture.detectChanges();

        expect(calendar.value).toBeTruthy();
        expect(calendar.value.length).toEqual(2);
        expect(calendar.value[1]).toBeNull();
    });

    it('should change keepInvalid', () => {
        calendar.keepInvalid = true;
        fixture.detectChanges();

        const updateInputfieldSpy = spyOn(calendar, 'updateInputfield').and.callThrough();
        const onModelTouchedSpy = spyOn(calendar, 'onModelTouched').and.callThrough();
        const onInputBlurSpy = spyOn(calendar, 'onInputBlur').and.callThrough();
        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        const blurEvent = new Event('blur');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        inputEl.nativeElement.dispatchEvent(blurEvent);
        fixture.detectChanges();

        expect(onInputBlurSpy).toHaveBeenCalled();
        expect(updateInputfieldSpy).not.toHaveBeenCalled();
        expect(onModelTouchedSpy).toHaveBeenCalled();
    });

    it('should trigger onModelChange when user input a well-formatted but invalid value with keepInvalid=true', () => {
        const today = new Date();

        calendar.keepInvalid = true;
        calendar.dateFormat = 'yy/mm/dd';
        calendar.minDate = today;
        fixture.detectChanges();

        const onModelChangeSpy = spyOn(calendar, 'onModelChange').and.callThrough();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        const blurEvent = new Event('blur');

        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();
        expect(onModelChangeSpy).not.toHaveBeenCalled();

        // simulate user input
        inputEl.nativeElement.value = '2000/01/01'; // <-- an invalid value (= before today)
        calendar.isKeydown = true;
        calendar.onUserInput({ target: inputEl.nativeElement });
        expect(onModelChangeSpy).toHaveBeenCalled();
    });

    it('should change appendto', () => {
        calendar.appendTo = 'body';
        const date = new Date(2017, 8, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.showTime = true;
        calendar.showSeconds = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        const blurEvent = new Event('blur');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[0].nativeElement.click();
        fixture.detectChanges();

        expect(calendar.value).toBeTruthy();
    });

    it('should use required', () => {
        calendar.required = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        expect(inputEl.nativeElement.required).toEqual(true);
    });

    it('should change hideOnDateTimeSelect', fakeAsync(() => {
        calendar.hideOnDateTimeSelect = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[0].nativeElement.click();
        tick(150);
        fixture.detectChanges();

        expect(calendar.overlayVisible).toEqual(false);
        flush();
    }));

    it('should hide overlay on range calendar when hideOnDateTimeSelect is true', fakeAsync(() => {
        calendar.hideOnDateTimeSelect = true;
        calendar.selectionMode = 'range';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[0].nativeElement.click();
        tick(150);
        fixture.detectChanges();

        dates[1].nativeElement.click();
        tick(150);
        fixture.detectChanges();

        expect(calendar.overlayVisible).toEqual(false);
        flush();
    }));

    it('should keep overlay visible on range calendar when hideOnDateTimeSelect is false', fakeAsync(() => {
        calendar.hideOnDateTimeSelect = false;
        calendar.selectionMode = 'range';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('.p-inputtext'));
        const focusEvent = new Event('focus');
        inputEl.nativeElement.click();
        inputEl.nativeElement.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const datesContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = datesContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[0].nativeElement.click();
        tick(150);
        fixture.detectChanges();

        dates[1].nativeElement.click();
        tick(150);
        fixture.detectChanges();

        expect(calendar.overlayVisible).toEqual(true);
        flush();
    }));

    it('should be next year', () => {
        const date = new Date(2017, 11, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const navForwardSpy = spyOn(calendar, 'navForward').and.callThrough();
        const nextMonthEl = fixture.debugElement.query(By.css('.p-datepicker-next'));
        nextMonthEl.nativeElement.click();
        fixture.detectChanges();

        const currentMonthEl = fixture.debugElement.query(By.css('.p-datepicker-month'));
        expect(currentMonthEl.nativeElement.textContent).toContain('January');
        expect(calendar.currentMonth).toEqual(0);
        expect(calendar.currentYear).toEqual(2018);
        expect(navForwardSpy).toHaveBeenCalled();
    });

    it('should be previous year', () => {
        const date = new Date(2017, 0, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const navBackwardSpy = spyOn(calendar, 'navBackward').and.callThrough();
        const prevMonthEl = fixture.debugElement.query(By.css('.p-datepicker-prev'));
        prevMonthEl.nativeElement.click();
        fixture.detectChanges();

        const currentMonthEl = fixture.debugElement.query(By.css('.p-datepicker-month'));
        expect(currentMonthEl.nativeElement.textContent).toContain('December');
        expect(calendar.currentMonth).toEqual(11);
        expect(calendar.currentYear).toEqual(2016);
        expect(navBackwardSpy).toHaveBeenCalled();
    });

    it('should use Year Picker', () => {
        const date = new Date(2017, 0, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.dateFormat = 'mm/yy';
        calendar.view = 'year';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const yearSelectEl = fixture.debugElement.query(By.css('.p-yearpicker'));
        const yearsEls = yearSelectEl.queryAll(By.css('.p-yearpicker-year'));
        expect(yearsEls.length).toEqual(10);
        expect(yearsEls[9].nativeElement.textContent).toContain('2019');
    });

    it('should change tabindex', () => {
        calendar.tabindex = 5;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input'));
        expect(inputEl.nativeElement.tabIndex).toEqual(5);
    });

    it('should be next year', () => {
        const date = new Date(2017, 11, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.yearNavigator = true;
        calendar.monthNavigator = true;
        calendar.yearRange = '2000:2030';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const nextMonthEl = fixture.debugElement.query(By.css('.p-datepicker-next'));
        nextMonthEl.nativeElement.click();
        fixture.detectChanges();

        expect(calendar.currentMonth).toEqual(0);
        expect(calendar.currentYear).toEqual(2018);
    });

    it('should be previous year', () => {
        const date = new Date(2017, 0, 23);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.yearNavigator = true;
        calendar.monthNavigator = true;
        calendar.yearRange = '2000:2030';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const prevMonthEl = fixture.debugElement.query(By.css('.p-datepicker-prev'));
        prevMonthEl.nativeElement.click();
        fixture.detectChanges();

        expect(calendar.currentMonth).toEqual(11);
        expect(calendar.currentYear).toEqual(2016);
    });

    it('should select range (touchUI)', () => {
        const date = new Date(2017, 2, 12);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.touchUI = true;
        calendar.selectionMode = 'range';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const panelEl = fixture.debugElement.query(By.css('div')).nativeElement;
        const containerEl = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const firstDayEl = containerEl.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'))[0].nativeElement;
        const thirdDayEl = containerEl.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'))[2].nativeElement;
        expect(panelEl.className).toContain('p-datepicker-touch-ui');
        firstDayEl.click();
        fixture.detectChanges();

        thirdDayEl.click();
        fixture.detectChanges();

        expect(calendar.overlayVisible).toEqual(true);
        expect(calendar.value.length).toEqual(2);
    });

    it('should highlight selected range in month view', () => {
        const date = new Date(2017, 2, 12);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.selectionMode = 'range';
        calendar.view = 'month';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const containerEl = fixture.debugElement.query(By.css('.p-monthpicker'));

        const firstMonthEl = containerEl.queryAll(By.css('span.p-monthpicker-month:not(.p-disabled)'))[0].nativeElement;
        const secondMonthEl = containerEl.queryAll(By.css('span.p-monthpicker-month:not(.p-disabled)'))[1].nativeElement;
        const thirdMonthEl = containerEl.queryAll(By.css('span.p-monthpicker-month:not(.p-disabled)'))[2].nativeElement;

        firstMonthEl.click();
        fixture.detectChanges();

        thirdMonthEl.click();
        fixture.detectChanges();

        expect(calendar.overlayVisible).toEqual(true);
        expect(calendar.value.length).toEqual(2);

        expect(firstMonthEl.classList).toContain('p-highlight');
        expect(secondMonthEl.classList).toContain('p-highlight');
        expect(thirdMonthEl.classList).toContain('p-highlight');
    });

    it('should show disabled months in month range selection mode', () => {
        const date = new Date(2017, 2, 12);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.selectionMode = 'range';
        calendar.view = 'month';
        calendar.maxDate = new Date(date.getFullYear(), 6, 1);
        calendar.minDate = new Date(date.getFullYear(), 3, 1);
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const containerEl = fixture.debugElement.query(By.css('.p-monthpicker'));

        const monthEl = (m: number) => containerEl.queryAll(By.css('span.p-monthpicker-month'))[m].nativeElement;

        [0, 1, 2, 7, 8, 9, 10, 11].forEach((m) => {
            expect(monthEl(m).classList).withContext(`${m} month must be disabled`).toContain('p-disabled');
        });

        [3, 4, 5, 6].forEach((m) => {
            expect(monthEl(m).classList).withContext(`${m} month must be enabled`).not.toContain('p-disabled');
        });
    });

    it('should select range (touchUI third times)', () => {
        const date = new Date(2017, 2, 12);
        calendar.defaultDate = date;
        jasmine.clock().mockDate(date);
        calendar.touchUI = true;
        calendar.selectionMode = 'multiple';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const panelEl = fixture.debugElement.query(By.css('div')).nativeElement;
        const containerEl = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const firstDayEl = containerEl.query(By.css('tbody')).query(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)')).nativeElement;
        const secondDayEl = containerEl.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'))[1].nativeElement;
        const thirdDayEl = containerEl.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'))[2].nativeElement;
        expect(panelEl.className).toContain('p-datepicker-touch-ui');
        firstDayEl.click();
        fixture.detectChanges();

        thirdDayEl.click();
        fixture.detectChanges();

        secondDayEl.click();
        fixture.detectChanges();

        expect(calendar.overlayVisible).toEqual(true);
        expect(calendar.value.length).toEqual(3);
    });

    it('should timeonly with touchUI', () => {
        calendar.timeOnly = true;
        calendar.touchUI = true;
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        fixture.detectChanges();

        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        calendar.currentHour = 0;
        calendar.currentMinute = 0;
        fixture.detectChanges();

        let defaultHour = calendar.currentHour;
        let defaultMinute = calendar.currentMinute;
        const timers = fixture.debugElement.query(By.css('.p-timepicker')).queryAll(By.css('div'));
        const hourPicker = timers[0];
        const minutePicker = timers[2];
        const incrementHourEl = hourPicker.queryAll(By.css('.p-link'))[0];
        const decrementHourEl = hourPicker.queryAll(By.css('.p-link'))[1];
        const incrementMinuteEl = minutePicker.queryAll(By.css('.p-link'))[0];
        const decrementMinuteEl = minutePicker.queryAll(By.css('.p-link'))[1];
        incrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementHourEl.nativeElement.dispatchEvent(new Event('mouseup'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        incrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mousedown'));
        decrementMinuteEl.nativeElement.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();
        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).not.toEqual(defaultHour.toString());
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).not.toEqual(defaultMinute.toString());
        expect(hourPicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('22');
        expect(minutePicker.queryAll(By.css('span'))[0].nativeElement.textContent).toEqual('58');
        expect(calendar.currentHour).toEqual(22);
        expect(calendar.currentMinute).toEqual(58);
    });

    it('should call navForward and pick the next year', () => {
        fixture.detectChanges();

        calendar.view = 'month';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        const incrementYearSpy = spyOn(calendar, 'incrementYear').and.callThrough();
        const decrementYearSpy = spyOn(calendar, 'decrementYear').and.callThrough();
        fixture.detectChanges();

        const navForwardEl = fixture.debugElement.query(By.css('.p-datepicker-next'));
        const navBackwardEl = fixture.debugElement.query(By.css('.p-datepicker-prev'));
        navForwardEl.nativeElement.click();
        fixture.detectChanges();

        expect(incrementYearSpy).toHaveBeenCalled();

        navBackwardEl.nativeElement.click();
        fixture.detectChanges();
        expect(decrementYearSpy).toHaveBeenCalled();
    });

    it('should call navForward and go to out of year range(increment)', () => {
        fixture.detectChanges();

        calendar.view = 'month';
        calendar.yearRange = (calendar.currentYear - 1).toString() + ':' + (calendar.currentYear + 1).toString();
        calendar.yearNavigator = true;
        calendar.yearOptions = [2017, 2018];
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        const incrementYearSpy = spyOn(calendar, 'incrementYear').and.callThrough();
        const populateYearOptionsSpy = spyOn(calendar, 'populateYearOptions').and.callThrough();
        calendar.currentYear = 2018;
        fixture.detectChanges();

        const navForwardEl = fixture.debugElement.query(By.css('.p-datepicker-next'));
        navForwardEl.nativeElement.click();
        fixture.detectChanges();

        expect(calendar.yearOptions.length).toEqual(2);
        expect(calendar.yearOptions[0]).toEqual(2018);
        expect(calendar.yearOptions[1]).toEqual(2019);
        expect(calendar.yearOptions[1]).toEqual(calendar.currentYear);
        expect(incrementYearSpy).toHaveBeenCalled();
        expect(populateYearOptionsSpy).toHaveBeenCalled();
    });

    it('should call navForward and go to out of year range (decrement)', () => {
        fixture.detectChanges();

        calendar.view = 'month';
        calendar.yearRange = (calendar.currentYear - 1).toString() + ':' + (calendar.currentYear + 1).toString();
        calendar.yearNavigator = true;
        calendar.yearOptions = [2017, 2018];
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        const decrementYearSpy = spyOn(calendar, 'decrementYear').and.callThrough();
        const populateYearOptionsSpy = spyOn(calendar, 'populateYearOptions').and.callThrough();
        calendar.currentYear = 2017;
        fixture.detectChanges();

        const navBackwardEl = fixture.debugElement.query(By.css('.p-datepicker-prev'));
        navBackwardEl.nativeElement.click();
        fixture.detectChanges();

        expect(calendar.yearOptions.length).toEqual(2);
        expect(calendar.yearOptions[0]).toEqual(2016);
        expect(calendar.yearOptions[0]).toEqual(calendar.currentYear);
        expect(calendar.yearOptions[1]).toEqual(2017);
        expect(decrementYearSpy).toHaveBeenCalled();
        expect(populateYearOptionsSpy).toHaveBeenCalled();
    });

    it('should call onUserInput and return nothing', () => {
        const onUserInputSpy = spyOn(calendar, 'onUserInput');
        fixture.detectChanges();

        calendar.onUserInput(event);
        fixture.detectChanges();

        expect(onUserInputSpy).toHaveBeenCalled();
        expect(calendar.isKeydown).toBeUndefined();
        expect(calendar.filled).toBeUndefined();
    });

    it('should select time with keyboardEvent', () => {
        calendar.timeOnly = true;
        calendar.hourFormat = '12';
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const parseValueFromStringSpy = spyOn(calendar, 'parseValueFromString').and.callThrough();
        const onUserInputSpy = spyOn(calendar, 'onUserInput').and.callThrough();
        const event = { target: { value: '10:10 AM' } };
        calendar.onInputKeydown(event);
        fixture.detectChanges();

        calendar.onUserInput(event);
        fixture.detectChanges();

        expect(parseValueFromStringSpy).toHaveBeenCalled();
        expect(onUserInputSpy).toHaveBeenCalled();
        expect(calendar.currentHour).toEqual(10);
        expect(calendar.currentMinute).toEqual(10);
        expect(calendar.pm).toEqual(false);
    });

    it('should allow changing time when min and max date times are within the hour', () => {
        const event = { preventDefault: () => {} };
        const now = new Date('2023-01-01T12:14:00.000Z'); // 1 minute before max date
        const minDate = new Date('2023-01-01T11:45:00.000Z'); // quarter to now date hour
        const maxDate = new Date('2023-01-01T12:15:01.000Z'); // quarter past now date hour, 1 minute and 1 second after now date
        const maxDateISO = maxDate.toISOString();
        const minDateISO = minDate.toISOString();
        calendar.defaultDate = now;
        calendar.value = now;
        calendar.showTime = true;
        calendar.showSeconds = true;
        calendar.minDate = minDate;
        calendar.maxDate = maxDate;
        fixture.detectChanges();

        calendar.incrementMinute(event);
        // increment 2 seconds, should clamp to max date
        calendar.incrementSecond(event);
        calendar.incrementSecond(event);
        calendar.updateTime();
        expect((calendar.value as Date).toISOString()).toBe(maxDateISO);
        // decrement back 1  minute and 1 second
        calendar.decrementMinute(event);
        calendar.decrementSecond(event);
        calendar.updateTime();
        // try increment 2 minutes, should clamp to max date
        calendar.incrementMinute(event);
        calendar.incrementMinute(event);
        calendar.updateTime();
        expect((calendar.value as Date).toISOString()).toBe(maxDateISO);
        // now time should be 12:15, min time should be 11:45, decrementing hour should clamp to min date
        calendar.decrementHour(event);
        calendar.updateTime();
        expect((calendar.value as Date).toISOString()).toBe(minDateISO);
        // increment hour should clamp to max date
        calendar.incrementHour(event);
        calendar.updateTime();
        expect((calendar.value as Date).toISOString()).toBe(maxDateISO);
    });

    it('should set input element date to minDate including the set time', () => {
        const minDate = new Date(2022, 0, 1, 20, 30, 0);
        const date = new Date(2022, 0, 2);
        calendar.minDate = minDate;
        calendar.defaultDate = date;
        calendar.hourFormat = '12';
        jasmine.clock().mockDate(date);
        fixture.detectChanges();

        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        const focusEvent = new Event('focus');
        inputEl.click();
        calendar.currentHour = 11;
        calendar.currentMinute = 30;
        inputEl.dispatchEvent(focusEvent);
        fixture.detectChanges();

        const selectdateSpy = spyOn(calendar, 'selectDate').and.callThrough();
        const calendarContainer = fixture.debugElement.query(By.css('.p-datepicker-calendar-container'));
        const dates = calendarContainer.query(By.css('tbody')).queryAll(By.css('span:not(.p-datepicker-weeknumber):not(.p-disabled)'));
        dates[0].nativeElement.click();
        fixture.detectChanges();

        expect(selectdateSpy).toHaveBeenCalled();
        expect(calendar.value).toEqual(minDate);
    });

    it('should display end date instead of start date in range selection', () => {
        calendar.selectionMode = 'range';
        calendar.value = [new Date('2024-03-01'), new Date('2024-04-01')];

        calendar.updateUI();
        expect(calendar.currentMonth).toBe(3);
        expect(calendar.currentYear).toBe(2024);
    });

    it('should display start date instead of default date in range selection', () => {
        calendar.selectionMode = 'range';
        calendar.value = [new Date('2024-03-01'), null];

        calendar.updateUI();
        expect(calendar.currentMonth).toBe(2);
        expect(calendar.currentYear).toBe(2024);
    });

    it('should use default date when no range is selected in range selection', () => {
        calendar.selectionMode = 'range';
        calendar.defaultDate = new Date('2024-01-01');

        calendar.updateUI();
        expect(calendar.currentMonth).toBe(0);
        expect(calendar.currentYear).toBe(2024);
    });

    it('should use current date when no default date and no range is selected in range selection', () => {
        jasmine.clock().install();
        jasmine.clock().mockDate(new Date('2024-06-11'));
        calendar.selectionMode = 'range';

        calendar.updateUI();
        expect(calendar.currentMonth).toBe(5);
        expect(calendar.currentYear).toBe(2024);

        jasmine.clock().uninstall();
    });
});
