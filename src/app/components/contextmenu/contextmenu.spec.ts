import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContextMenu, ContextMenuModule } from './contextmenu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ContextMenuService } from '@dl3g0/primeng/api';

@Component({
    template: `
        <p-contextMenu [global]="true" [model]="items1"></p-contextMenu>
        <p-contextMenu [target]="p" [model]="items1" [appendTo]="p"></p-contextMenu>
        <p #p>PrimeNG ROCKS!</p>
    `,
    standalone: false
})
class TestContextMenuTest {
    items1 = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [{ label: 'Project' }, { label: 'Other' }]
                },
                { label: 'Open' },
                { separator: true },
                { label: 'Quit' }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
            ]
        },
        {
            label: 'Help',
            icon: 'pi pi-fw pi-question',
            items: [
                {
                    label: 'Contents'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-search',
                    items: [
                        {
                            label: 'Text',
                            items: [
                                {
                                    label: 'Workspace'
                                }
                            ]
                        },
                        {
                            label: 'File'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Actions',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        { label: 'Save', icon: 'pi pi-fw pi-save' },
                        { label: 'Update', icon: 'pi pi-fw pi-save' }
                    ]
                },
                {
                    label: 'Other',
                    icon: 'pi pi-fw pi-tags',
                    items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }]
                }
            ]
        },
        { separator: true },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-times'
        }
    ];
}

describe('ContextMenu', () => {
    let contextmenu: ContextMenu;
    let contextmenuP: ContextMenu;
    let fixture: ComponentFixture<TestContextMenuTest>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, RouterTestingModule.withRoutes([{ path: 'test', component: ContextMenu }]), ContextMenuModule],
            declarations: [TestContextMenuTest],
            providers: [ContextMenuService]
        });

        fixture = TestBed.createComponent(TestContextMenuTest);
        contextmenu = fixture.debugElement.children[0].componentInstance;
        contextmenuP = fixture.debugElement.children[1].componentInstance;
    });

    it('should create container by default', () => {
        fixture.detectChanges();

        const containerEls = fixture.debugElement.queryAll(By.css('p-contextmenu'));
        expect(containerEls.length).toEqual(2);
    });

    it('should open contextmenu (global)', () => {
        fixture.detectChanges();

        const showSpy = spyOn(contextmenu, 'show').and.callThrough();
        const contextmenuEvent: any = document.createEvent('CustomEvent');
        contextmenuEvent.pageX = 20;
        contextmenuEvent.pageY = 20;
        contextmenuEvent.initEvent('contextmenu', true, true);
        document.dispatchEvent(contextmenuEvent);
        fixture.detectChanges();

        expect(showSpy).toHaveBeenCalled();
    });

    it('should close contextmenu when outside click (global)', fakeAsync(() => {
        fixture.detectChanges();

        const contextmenuEvent: any = document.createEvent('CustomEvent');
        contextmenuEvent.pageX = 20;
        contextmenuEvent.pageY = 20;
        contextmenuEvent.initEvent('contextmenu', true, true);
        document.dispatchEvent(contextmenuEvent);
        fixture.detectChanges();

        const closeSpy = spyOn(contextmenu, 'hide').and.callThrough();
        fixture.whenStable().then(() => {
            document.dispatchEvent(new Event('click'));
        });
        tick();

        expect(closeSpy).toHaveBeenCalled();
    }));

    it('should close contextmenu when outside window resize (global)', fakeAsync(() => {
        contextmenu.appendTo = 'body';
        fixture.detectChanges();

        const showSpy = spyOn(contextmenu, 'show').and.callThrough();
        const contextmenuEvent: any = document.createEvent('CustomEvent');
        contextmenuEvent.pageX = 20;
        contextmenuEvent.pageY = 20;
        contextmenuEvent.initEvent('contextmenu', true, true);
        document.dispatchEvent(contextmenuEvent);
        fixture.detectChanges();

        expect(showSpy).toHaveBeenCalled();

        const hideSpy = spyOn(contextmenu, 'hide').and.callThrough();
        fixture.whenStable().then(() => {
            window.dispatchEvent(new Event('resize'));
        });
        tick();

        expect(hideSpy).toHaveBeenCalled();
    }));

    it('should open and close programmatically', fakeAsync(() => {
        fixture.detectChanges();

        const showSpy = spyOn(contextmenu, 'show').and.callThrough();

        const contextmenuEvent: any = document.createEvent('CustomEvent');
        contextmenuEvent.pageX = 20;
        contextmenuEvent.pageY = 20;
        contextmenu.toggle(contextmenuEvent);
        fixture.detectChanges();

        expect(showSpy).toHaveBeenCalled();
        const hideSpy = spyOn(contextmenu, 'hide').and.callThrough();
        contextmenu.toggle();
        tick();
        fixture.detectChanges();

        expect(hideSpy).toHaveBeenCalled();
    }));

    it('should open contextmenu (target)', fakeAsync(() => {
        fixture.detectChanges();

        const showSpy = spyOn(contextmenuP, 'show').and.callThrough();
        const target = fixture.debugElement.query(By.css('p'));
        const contextmenuEvent: any = document.createEvent('CustomEvent');
        contextmenuEvent.pageX = 20;
        contextmenuEvent.pageY = 20;
        contextmenuEvent.initEvent('contextmenu', true, true);
        target.nativeElement.dispatchEvent(contextmenuEvent);
        tick();
        fixture.detectChanges();

        expect(showSpy).toHaveBeenCalled();
    }));

    it('should close contextmenu when outside click (target)', fakeAsync(() => {
        fixture.detectChanges();

        const target = fixture.debugElement.query(By.css('p'));
        const contextmenuEvent: any = document.createEvent('CustomEvent');
        contextmenuEvent.pageX = 20;
        contextmenuEvent.pageY = 20;
        contextmenuEvent.initEvent('contextmenu', true, true);
        target.nativeElement.dispatchEvent(contextmenuEvent);
        tick();
        fixture.detectChanges();

        const closeSpy = spyOn(contextmenuP, 'hide').and.callThrough();
        fixture.whenStable().then(() => {
            document.dispatchEvent(new Event('click'));
        });
        tick();

        expect(closeSpy).toHaveBeenCalled();
    }));

    it('should close contextmenu when outside window resize (target)', fakeAsync(() => {
        contextmenu.appendTo = 'body';
        fixture.detectChanges();

        const showSpy = spyOn(contextmenuP, 'show').and.callThrough();
        const target = fixture.debugElement.query(By.css('p'));
        const contextmenuEvent: any = document.createEvent('CustomEvent');
        contextmenuEvent.pageX = 20;
        contextmenuEvent.pageY = 20;
        contextmenuEvent.initEvent('contextmenu', true, true);
        target.nativeElement.dispatchEvent(contextmenuEvent);
        fixture.detectChanges();
        expect(showSpy).toHaveBeenCalled();

        const hideSpy = spyOn(contextmenuP, 'hide').and.callThrough();
        fixture.whenStable().then(() => {
            window.dispatchEvent(new Event('resize'));
        });
        tick();

        expect(hideSpy).toHaveBeenCalled();
    }));
});
