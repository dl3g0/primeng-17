import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from '@dl3g0/primeng/api';
import { Code } from '@domain/code';

@Component({
    selector: 'tooltip-doc',
    template: `
        <app-docsectiontext>
            <p>Items display a tooltip on hover when a standalone <a href="#" [routerLink]="['/tooltip']">Tooltip</a> is present with a target that matches the items.</p>
        </app-docsectiontext>
        <div class="card">
            <div style="height: 350px; position: relative;" class="speeddial-tooltip-demo">
                <p-toast />
                <p-speedDial [model]="leftTooltipItems" className="speeddial-right" direction="up" />
                <p-speedDial [model]="tooltipItems" className="speeddial-left" direction="up" />
            </div>
        </div>
        <app-code [code]="code" selector="speed-dial-tooltip-demo"></app-code>
    `,
    providers: [MessageService],
    standalone: false
})
export class TooltipDoc implements OnInit {
    tooltipItems: MenuItem[] | undefined;

    leftTooltipItems: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.tooltipItems = [
            {
                tooltipOptions: {
                    tooltipLabel: 'Add'
                },
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Update'
                },
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Delete'
                },
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Upload'
                },
                icon: 'pi pi-upload'
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Angular Website'
                },
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];

        this.leftTooltipItems = [
            {
                tooltipOptions: {
                    tooltipLabel: 'Add',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Update',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Delete',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                tooltipOptions: {
                    tooltipLabel: 'Upload',
                    tooltipPosition: 'left'
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Angular Website',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }

    code: Code = {
        basic: `<p-speedDial
    [model]="leftTooltipItems"
    className="speeddial-right"
    direction="up" />
<p-speedDial
    [model]="tooltipItems"
    className="speeddial-left"
    direction="up" />`,

        html: `<div class="card">
    <div style="height: 350px; position: relative;" class="speeddial-tooltip-demo">
        <p-toast />
        <p-speedDial
            [model]="leftTooltipItems"
            className="speeddial-right"
            direction="up" />
        <p-speedDial
            [model]="tooltipItems"
            className="speeddial-left"
            direction="up" />
    </div>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from '@dl3g0/primeng/api';
import { SpeedDialModule } from '@dl3g0/primeng/speeddial';
import { ToastModule } from '@dl3g0/primeng/toast';

@Component({
    selector: 'speed-dial-tooltip-demo',
    templateUrl: './speed-dial-tooltip-demo.html',
    styles: [
        \`:host ::ng-deep {
            .speeddial-tooltip-demo {
                .p-speeddial-direction-up {
                    &.speeddial-left {
                        left: 0;
                        bottom: 0;
                    }

                    &.speeddial-right {
                        right: 0;
                        bottom: 0;
                    }
                }
            }
        }\`
    ],
    standalone: true,
    imports: [SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeedDialTooltipDemo implements OnInit {
    tooltipItems: MenuItem[] | undefined;

    leftTooltipItems: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.tooltipItems = [
            {
                tooltipOptions: {
                    tooltipLabel: 'Add'
                },
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Update'
                },
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Delete'
                },
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Upload'
                },
                icon: 'pi pi-upload'
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Angular Website'
                },
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];

        this.leftTooltipItems = [
            {
                tooltipOptions: {
                    tooltipLabel: 'Add',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Update',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Delete',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                tooltipOptions: {
                    tooltipLabel: 'Upload',
                    tooltipPosition: 'left'
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Angular Website',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];
    }
}`,

        scss: `:host ::ng-deep {
    .speeddial-tooltip-demo {
        .p-speeddial-direction-up {
            &.speeddial-left {
                left: 0;
                bottom: 0;
            }

            &.speeddial-right {
                right: 0;
                bottom: 0;
            }
        }
    }
}`
    };
}
