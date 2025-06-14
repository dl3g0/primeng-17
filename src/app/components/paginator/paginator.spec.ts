import { ScrollingModule } from '@angular/cdk/scrolling';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Paginator, PaginatorModule } from './paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '@dl3g0/primeng/dropdown';
import { SimpleChange } from '@angular/core';

describe('Paginator', () => {
    let paginator: Paginator;
    let fixture: ComponentFixture<Paginator>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, FormsModule, ScrollingModule, PaginatorModule, DropdownModule]
        });

        fixture = TestBed.createComponent(Paginator);
        paginator = fixture.componentInstance;
    });

    it('should created by default', () => {
        fixture.detectChanges();

        const paginatorEl = fixture.debugElement.query(By.css('.p-paginator'));
        expect(paginatorEl).toBeTruthy();
    });

    it('should apply style', () => {
        fixture.componentRef.setInput('style', { height: '250px' });
        fixture.detectChanges();

        const paginatorElement = fixture.debugElement.query(By.css('.p-paginator'));
        expect(paginatorElement?.nativeElement?.style?.height).toEqual('250px');
    });

    it('should apply styleClass', () => {
        fixture.componentRef.setInput('styleClass', 'p-paginator-bottom');
        fixture.detectChanges();

        const paginatorElement = fixture.debugElement.query(By.css('.p-paginator'));
        expect(paginatorElement?.nativeElement).toHaveClass('p-paginator-bottom');
    });

    it('should use alwaysShow false', () => {
        paginator.alwaysShow = false;
        fixture.detectChanges();

        const paginatorEl = fixture.debugElement.query(By.css('.p-paginator'));
        expect(paginatorEl).toBeFalsy();
    });

    it('should not show dropdown', () => {
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false)
        });
        fixture.detectChanges();

        const dropdownEl = fixture.debugElement.query(By.css('p-dropdown'));
        expect(dropdownEl).toBeFalsy();
    });

    it('should use dropdownAppendTo', () => {
        paginator.dropdownAppendTo = 'body';
        paginator.rowsPerPageOptions = [10, 20, 30];
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false),
            rowsPerPageOptions: new SimpleChange(null, [10, 20, 30], false)
        });
        fixture.detectChanges();

        const dropdownEl = fixture.debugElement.query(By.css('p-dropdown'));
        expect(dropdownEl.componentInstance.appendTo).toEqual('body');
    });

    it('should have a 5 page link, 4 paginator element and 1 dropdown with 3 option', () => {
        paginator.rowsPerPageOptions = [10, 20, 30];
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false),
            rowsPerPageOptions: new SimpleChange(null, [10, 20, 30], false)
        });
        const updatePaginatorStateSpy = spyOn(paginator, 'updatePaginatorState').and.callThrough();
        fixture.detectChanges();

        const pageEls = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        const dropdownEl = fixture.debugElement.query(By.css('p-dropdown'));
        const paginatorElemntEls = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        expect(dropdownEl).toBeTruthy();
        expect(dropdownEl.componentInstance.options.length).toEqual(3);
        expect(updatePaginatorStateSpy).toHaveBeenCalled();
        expect(paginator.pageLinks.length).toEqual(5);
        expect(pageEls.length).toEqual(5);
        expect(paginatorElemntEls.length).toEqual(5);
    });

    it('should called onPageLinkClick and go to clicked page', () => {
        paginator.rowsPerPageOptions = [10, 20, 30];
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false),
            rowsPerPageOptions: new SimpleChange(null, [10, 20, 30], false)
        });
        const onPageLinkClickSpy = spyOn(paginator, 'onPageLinkClick').and.callThrough();
        fixture.detectChanges();

        const pageEls = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        const pickedPage = pageEls[3];
        pageEls[3].nativeElement.click();
        fixture.detectChanges();

        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        const activePage = fixture.debugElement.query(By.css('.p-highlight'));
        expect(onPageLinkClickSpy);
        expect(activePage.nativeElement.textContent.replace(/\s+/g, '')).toEqual('4');
        expect((paginator.getPage() + 1).toString().replace(/\s+/g, '')).toEqual(pickedPage.nativeElement.textContent.replace(/\s+/g, ''));
        let pageValue = paginator.getPage() - 1;
        for (let link of paginator.pageLinks) {
            expect(link).toEqual(pageValue);
            pageValue++;
        }
        expect(pageElsAfterClick[2]).toEqual(activePage);
    });

    it('should called changePageToNext and go to next page', () => {
        paginator.rowsPerPageOptions = [10, 20, 30];
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false),
            rowsPerPageOptions: new SimpleChange(null, [10, 20, 30], false)
        });
        const changePageToNextSpy = spyOn(paginator, 'changePageToNext').and.callThrough();
        fixture.detectChanges();

        const pageEls = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        const pageNextEl = fixture.debugElement.query(By.css('.p-paginator-next'));
        const nextPageEl = pageEls[1];
        pageNextEl.nativeElement.click();
        fixture.detectChanges();

        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        const activePage = fixture.debugElement.query(By.css('.p-highlight'));
        expect(changePageToNextSpy);
        expect(activePage.nativeElement.textContent.replace(/\s+/g, '')).toEqual('2');
        expect((paginator.getPage() + 1).toString().replace(/\s+/g, '')).toEqual(nextPageEl.nativeElement.textContent.replace(/\s+/g, ''));
        let pageValue = paginator.getPage();
        for (let link of paginator.pageLinks) {
            expect(link).toEqual(pageValue);
            pageValue++;
        }
        expect(pageElsAfterClick[paginator.getPage()]).toEqual(activePage);
    });

    it('should called changePageToPrev and go to prev page', () => {
        paginator.rowsPerPageOptions = [10, 20, 30];
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false),
            rowsPerPageOptions: new SimpleChange(null, [10, 20, 30], false)
        });
        const changePageToPrevSpy = spyOn(paginator, 'changePageToPrev').and.callThrough();
        fixture.detectChanges();

        const pageEls = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        const pageNextEl = fixture.debugElement.query(By.css('.p-paginator-next'));
        const pagePrevEl = fixture.debugElement.query(By.css('.p-paginator-prev'));
        const prevPageEl = pageEls[0];
        pageNextEl.nativeElement.click();
        fixture.detectChanges();

        pagePrevEl.nativeElement.click();
        fixture.detectChanges();

        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        const activePage = fixture.debugElement.query(By.css('.p-highlight'));
        expect(changePageToPrevSpy);
        expect(activePage.nativeElement.textContent.replace(/\s+/g, '')).toEqual('1');
        expect((paginator.getPage() + 1).toString().replace(/\s+/g, '')).toEqual(prevPageEl.nativeElement.textContent.replace(/\s+/g, ''));
        let pageValue = paginator.getPage() + 1;
        for (let link of paginator.pageLinks) {
            expect(link).toEqual(pageValue);
            pageValue++;
        }
        expect(pageElsAfterClick[0]).toEqual(activePage);
    });

    it('should called changePageToLast and go to last page', () => {
        paginator.rowsPerPageOptions = [10, 20, 30];
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false),
            rowsPerPageOptions: new SimpleChange(null, [10, 20, 30], false)
        });
        const changePageToLastSpy = spyOn(paginator, 'changePageToLast').and.callThrough();
        fixture.detectChanges();

        const pageLastEl = fixture.debugElement.query(By.css('.p-paginator-last'));
        pageLastEl.nativeElement.click();
        fixture.detectChanges();

        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        const activePage = fixture.debugElement.query(By.css('.p-highlight'));
        expect(changePageToLastSpy);
        expect(activePage.nativeElement.textContent.replace(/\s+/g, '')).toEqual('12');
        let pageValue = paginator.getPage() - 3;
        for (let link of paginator.pageLinks) {
            expect(link).toEqual(pageValue);
            pageValue++;
        }
        expect(pageElsAfterClick[4]).toEqual(activePage);
        expect(pageLastEl.nativeElement.className).toContain('p-disabled');
    });

    it('should called changePageToFirst and go to first page', () => {
        paginator.rowsPerPageOptions = [10, 20, 30];
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false),
            rowsPerPageOptions: new SimpleChange(null, [10, 20, 30], false)
        });
        const changePageToFirstSpy = spyOn(paginator, 'changePageToFirst').and.callThrough();
        fixture.detectChanges();

        const pageLastEl = fixture.debugElement.query(By.css('.p-paginator-last'));
        const pageFirstEl = fixture.debugElement.query(By.css('.p-paginator-first'));
        pageLastEl.nativeElement.click();
        fixture.detectChanges();

        pageFirstEl.nativeElement.click();
        fixture.detectChanges();

        const pageElsAfterClick = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        const activePage = fixture.debugElement.query(By.css('.p-highlight'));
        expect(changePageToFirstSpy);
        expect(activePage.nativeElement.textContent.replace(/\s+/g, '')).toEqual('1');
        let pageValue = paginator.getPage() + 1;
        for (let link of paginator.pageLinks) {
            expect(link).toEqual(pageValue);
            pageValue++;
        }
        expect(pageElsAfterClick[0]).toEqual(activePage);
        expect(pageFirstEl.nativeElement.className).toContain('p-disabled');
    });

    it('should called onRppChange and change page count', () => {
        paginator.rowsPerPageOptions = [10, 20, 30];
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false),
            rowsPerPageOptions: new SimpleChange(null, [10, 20, 30], false)
        });
        const onRppChangeSpy = spyOn(paginator, 'onRppChange').and.callThrough();
        fixture.detectChanges();

        const dropdownEl = fixture.debugElement.query(By.css('.p-dropdown'));
        dropdownEl.nativeElement.click();
        fixture.detectChanges();
        const dropdownItemsEl = fixture.debugElement.queryAll(By.css('.p-dropdown-item'));
        dropdownItemsEl[1].nativeElement.click();
        fixture.detectChanges();

        expect(onRppChangeSpy).toHaveBeenCalled();
        expect(paginator.getPageCount()).toEqual(6);
    });

    it('should listen onPageChange', () => {
        paginator.rowsPerPageOptions = [10, 20, 30];
        paginator.rows = 10;
        paginator.totalRecords = 120;
        paginator.ngOnChanges({
            rows: new SimpleChange(null, 10, false),
            totalRecords: new SimpleChange(null, 120, false),
            rowsPerPageOptions: new SimpleChange(null, [10, 20, 30], false)
        });
        fixture.detectChanges();

        let data;
        paginator.onPageChange.subscribe((value) => (data = value));
        const pageEls = fixture.debugElement.queryAll(By.css('.p-paginator-page'));
        pageEls[3].nativeElement.click();
        fixture.detectChanges();
        expect(data).toBeTruthy();
        expect(data.page).toEqual(3);
        expect(data.rows).toEqual(10);
        expect(data.pageCount).toEqual(12);
    });
});
