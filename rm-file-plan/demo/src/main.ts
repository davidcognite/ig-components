
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from 'ng2-alfresco-core';

import { RmFilePlanModule } from 'rm-file-plan';

@Component({
  selector: 'my-app',
  template: `<rm-file-plan></rm-file-plan>`
})
class DemoApp {
  constructor() {
    console.log('constructor');
  }
}

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        RmFilePlanModule
    ],
    declarations: [ DemoApp ],
    bootstrap:    [ DemoApp ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
