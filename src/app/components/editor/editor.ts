import { CommonModule, isPlatformServer } from '@angular/common';
import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    NgModule,
    Output,
    PLATFORM_ID,
    QueryList,
    TemplateRef,
    ViewEncapsulation,
    afterNextRender,
    forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Header, PrimeTemplate, SharedModule } from '@dl3g0/primeng/api';
import { DomHandler } from '@dl3g0/primeng/dom';
import { Nullable } from '@dl3g0/primeng/ts-helpers';
import { EditorInitEvent, EditorSelectionChangeEvent, EditorTextChangeEvent } from './editor.interface';

export const EDITOR_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Editor),
    multi: true
};
/**
 * Editor groups a collection of contents in tabs.
 * @group Components
 */
@Component({
    selector: 'p-editor',
    template: `
        <div [ngClass]="'p-editor-container'" [class]="styleClass">
            <div class="p-editor-toolbar" *ngIf="toolbar || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div class="p-editor-toolbar" *ngIf="!modules && !toolbar && !headerTemplate">
                <span class="ql-formats">
                    <select class="ql-header">
                        <option value="1">Heading</option>
                        <option value="2">Subheading</option>
                        <option selected>Normal</option>
                    </select>
                    <select class="ql-font">
                        <option selected>Sans Serif</option>
                        <option value="serif">Serif</option>
                        <option value="monospace">Monospace</option>
                    </select>
                </span>
                <span class="ql-formats">
                    <button class="ql-bold" aria-label="Bold" type="button"></button>
                    <button class="ql-italic" aria-label="Italic" type="button"></button>
                    <button class="ql-underline" aria-label="Underline" type="button"></button>
                </span>
                <span class="ql-formats">
                    <select class="ql-color"></select>
                    <select class="ql-background"></select>
                </span>
                <span class="ql-formats">
                    <button class="ql-list" value="ordered" aria-label="Ordered List" type="button"></button>
                    <button class="ql-list" value="bullet" aria-label="Unordered List" type="button"></button>
                    <select class="ql-align">
                        <option selected></option>
                        <option value="center">center</option>
                        <option value="right">right</option>
                        <option value="justify">justify</option>
                    </select>
                </span>
                <span class="ql-formats">
                    <button class="ql-link" aria-label="Insert Link" type="button"></button>
                    <button class="ql-image" aria-label="Insert Image" type="button"></button>
                    <button class="ql-code-block" aria-label="Insert Code Block" type="button"></button>
                </span>
                <span class="ql-formats">
                    <button class="ql-clean" aria-label="Remove Styles" type="button"></button>
                </span>
            </div>
            <div class="p-editor-content" [ngStyle]="style"></div>
        </div>
    `,
    providers: [EDITOR_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./editor.css'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-element'
    },
    standalone: false
})
export class Editor implements AfterContentInit, ControlValueAccessor {
    /**
     * Inline style of the container.
     * @group Props
     */
    @Input() style: { [klass: string]: any } | null | undefined;
    /**
     * Style class of the container.
     * @group Props
     */
    @Input() styleClass: string | undefined;
    /**
     * Placeholder text to show when editor is empty.
     * @group Props
     */
    @Input() placeholder: string | undefined;
    /**
     * Whitelist of formats to display, see here for available options.
     * @group Props
     */
    @Input() formats: string[] | undefined;
    /**
     * Modules configuration of Editor, see here for available options.
     * @group Props
     */
    @Input() modules: object | undefined;
    /**
     * DOM Element or a CSS selector for a DOM Element, within which the editor’s p elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries.
     * @group Props
     */
    @Input() bounds: HTMLElement | string | undefined;
    /**
     * DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible from the scrolling..
     * @group Props
     */
    @Input() scrollingContainer: HTMLElement | string | undefined;
    /**
     * Shortcut for debug. Note debug is a static method and will affect other instances of Quill editors on the page. Only warning and error messages are enabled by default.
     * @group Props
     */
    @Input() debug: string | undefined;
    /**
     * Whether to instantiate the editor to read-only mode.
     * @group Props
     */
    @Input() get readonly(): boolean {
        return this._readonly;
    }
    set readonly(val: boolean) {
        this._readonly = val;

        if (this.quill) {
            if (this._readonly) this.quill.disable();
            else this.quill.enable();
        }
    }
    /**
     * Callback to invoke when the quill modules are loaded.
     * @param {EditorInitEvent} event - custom event.
     * @group Emits
     */
    @Output() onInit: EventEmitter<EditorInitEvent> = new EventEmitter<EditorInitEvent>();
    /**
     * Callback to invoke when text of editor changes.
     * @param {EditorTextChangeEvent} event - custom event.
     * @group Emits
     */
    @Output() onTextChange: EventEmitter<EditorTextChangeEvent> = new EventEmitter<EditorTextChangeEvent>();
    /**
     * Callback to invoke when selection of the text changes.
     * @param {EditorSelectionChangeEvent} event - custom event.
     * @group Emits
     */
    @Output() onSelectionChange: EventEmitter<EditorSelectionChangeEvent> = new EventEmitter<EditorSelectionChangeEvent>();

    @ContentChildren(PrimeTemplate) templates!: QueryList<PrimeTemplate>;

    @ContentChild(Header) toolbar: any;

    value: Nullable<string>;

    _readonly: boolean = false;

    onModelChange: Function = () => {};

    onModelTouched: Function = () => {};

    quill: any;

    dynamicQuill: any;

    headerTemplate: Nullable<TemplateRef<any>>;

    private quillElements!: { editorElement: HTMLElement; toolbarElement: HTMLElement };

    constructor(
        public el: ElementRef,
        @Inject(PLATFORM_ID) private platformId: object
    ) {
        /**
         * Read or write the DOM once, when initializing non-Angular (Quill) library.
         */
        afterNextRender(() => {
            this.initQuillElements();
            this.initQuillEditor();
        });
    }

    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
            }
        });
    }

    writeValue(value: any): void {
        this.value = value;

        if (this.quill) {
            if (value) {
                this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith('2') ? { html: this.value } : this.value));
            } else {
                this.quill.setText('');
            }
        }
    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    getQuill() {
        return this.quill;
    }

    private initQuillEditor(): void {
        if (isPlatformServer(this.platformId)) {
            return;
        }

        /**
         * Importing Quill at top level, throws `document is undefined` error during when
         * building for SSR, so this dynamically loads quill when it's in browser module.
         */
        if (!this.dynamicQuill) {
            import('quill')
                .then((quillModule: any) => {
                    this.dynamicQuill = quillModule.default;
                    this.createQuillEditor();
                })
                .catch((e) => console.error(e.message));
        } else {
            this.createQuillEditor();
        }
    }

    private createQuillEditor(): void {
        this.initQuillElements();

        const { toolbarElement, editorElement } = this.quillElements;
        let defaultModule = { toolbar: toolbarElement };
        let modules = this.modules ? { ...defaultModule, ...this.modules } : defaultModule;
        this.quill = new this.dynamicQuill(editorElement, {
            modules: modules,
            placeholder: this.placeholder,
            readOnly: this.readonly,
            theme: 'snow',
            formats: this.formats,
            bounds: this.bounds,
            debug: this.debug,
            scrollingContainer: this.scrollingContainer
        });

        const isQuill2 = this.dynamicQuill.version.startsWith('2');

        if (this.value) {
            this.quill.setContents(this.quill.clipboard.convert(isQuill2 ? { html: this.value } : this.value));
        }

        this.quill.on('text-change', (delta: any, oldContents: any, source: any) => {
            if (source === 'user') {
                let html = isQuill2 ? this.quill.getSemanticHTML() : DomHandler.findSingle(editorElement, '.ql-editor').innerHTML;
                let text = this.quill.getText().trim();
                if (html === '<p><br></p>') {
                    html = null;
                }

                this.onTextChange.emit({
                    htmlValue: html,
                    textValue: text,
                    delta: delta,
                    source: source
                });

                this.onModelChange(html);
                this.onModelTouched();
            }
        });

        this.quill.on('selection-change', (range: string, oldRange: string, source: string) => {
            this.onSelectionChange.emit({
                range: range,
                oldRange: oldRange,
                source: source
            });
        });

        this.onInit.emit({
            editor: this.quill
        });
    }

    private initQuillElements(): void {
        if (!this.quillElements) {
            this.quillElements = {
                editorElement: DomHandler.findSingle(this.el.nativeElement, 'div.p-editor-content'),
                toolbarElement: DomHandler.findSingle(this.el.nativeElement, 'div.p-editor-toolbar')
            };
        }
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [Editor, SharedModule],
    declarations: [Editor]
})
export class EditorModule {}
