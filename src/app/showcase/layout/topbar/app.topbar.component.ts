import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, OnDestroy, Output, Renderer2, afterNextRender, DOCUMENT } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import docsearch from '@docsearch/js';
import { AppConfigService } from '@service/appconfigservice';
import { DomHandler } from '@dl3g0/primeng/dom';
import { StyleClassModule } from '@dl3g0/primeng/styleclass';
// import Versions from '../../data/versions.json';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    imports: [CommonModule, FormsModule, StyleClassModule, RouterModule]
})
export class AppTopBarComponent implements OnDestroy {
    @Input() showConfigurator = true;

    @Input() showMenuButton = true;

    @Output() onDarkModeSwitch = new EventEmitter<any>();

    // versions: any[] = Versions;

    version: string = 'v17';

    scrollListener: VoidFunction | null;

    private window: Window;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private el: ElementRef,
        private renderer: Renderer2,
        private router: Router,
        private configService: AppConfigService
    ) {
        this.window = this.document.defaultView as Window;

        afterNextRender(() => {
            this.bindScrollListener();
            this.initDocSearch();
        });
    }

    get isDarkMode() {
        return this.configService.config().darkMode;
    }

    toggleMenu() {
        if (this.configService.state.menuActive) {
            this.configService.hideMenu();
            DomHandler.unblockBodyScroll('blocked-scroll');
        } else {
            this.configService.showMenu();
            DomHandler.blockBodyScroll('blocked-scroll');
        }
    }

    showConfig() {
        this.configService.showConfig();
    }

    toggleDarkMode() {
        this.onDarkModeSwitch.emit(null);
    }

    initDocSearch() {
        docsearch({
            appId: 'LIYXHCGZM7',
            apiKey: '613999de8971de0c46f8ddd72f31dcd5',
            indexName: 'v17-primeng',
            container: '#docsearch'
        });
    }

    bindScrollListener() {
        if (!this.scrollListener) {
            this.scrollListener = this.renderer.listen(this.window, 'scroll', () => {
                if (this.window.scrollY > 0) {
                    this.el.nativeElement.children[0].classList.add('layout-topbar-sticky');
                } else {
                    this.el.nativeElement.children[0].classList.remove('layout-topbar-sticky');
                }
            });
        }
    }

    unbindScrollListener() {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
    }

    ngOnDestroy() {
        this.unbindScrollListener();
    }
}
