import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule, AlfrescoSettingsService, AlfrescoAuthenticationService } from 'ng2-alfresco-core';

import { RmFilePlanModule, RmFilePlanComponent } from 'rm-file-plan';

@Component({
    selector: 'my-app',
    template: `<rm-file-plan></rm-file-plan>`
})
class DemoApp implements OnInit {

    currentFolderId: string = '-my-';

    authenticated: boolean = false;

    ecmHost: string = 'http://health2.londonlab.alfresco.me:8080';

    ticket: string;

    @ViewChild(RmFilePlanComponent)
    rmFilePlanModule: RmFilePlanComponent;

    constructor(private authService: AlfrescoAuthenticationService,
                private settingsService: AlfrescoSettingsService) {

        settingsService.ecmHost = this.ecmHost;
        settingsService.setProviders('ECM');

        if (this.authService.getTicketEcm()) {
            this.ticket = this.authService.getTicketEcm();
        }
    }

    ngOnInit() {
        this.login();
    }

    login() {
        this.authService.login('admin', 'admin').subscribe(
            ticket => {
                console.log(ticket);
                this.ticket = this.authService.getTicketEcm();
                this.authenticated = true;
                this.rmFilePlanModule.reload();
            },
            error => {
                console.log(error);
                this.authenticated = false;
            });
    }

}

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        RmFilePlanModule.forRoot()
    ],
    declarations: [DemoApp],
    bootstrap: [DemoApp]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
