
import { NgModule } from '@angular/core';
import { CoreModule } from 'ng2-alfresco-core';

import { RmFilePlanComponent } from './src/rm-file-plan.component';

export * from './src/rm-file-plan.component';

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        RmFilePlanComponent
    ],
    providers: [
    ],
    exports: [
        RmFilePlanComponent
    ]
})
export class RmFilePlanModule {}
