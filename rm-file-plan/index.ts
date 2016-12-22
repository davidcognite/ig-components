
import { NgModule } from '@angular/core';
import { CoreModule } from 'ng2-alfresco-core';
import { DocumentListModule } from 'ng2-alfresco-documentlist';

import { RmFilePlanComponent } from './src/rm-file-plan.component';

export * from './src/rm-file-plan.component';

@NgModule({
    imports: [
        CoreModule,
        DocumentListModule
    ],
    declarations: [
        RmFilePlanComponent
    ],
    providers: [
    ],
    exports: [
        RmFilePlanComponent,
        DocumentListModule
    ]
})
export class RmFilePlanModule {}
