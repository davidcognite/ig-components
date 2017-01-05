import { Component, ViewChild } from '@angular/core';
import { DocumentList } from 'ng2-alfresco-documentlist';

@Component({
    selector: 'rm-file-plan',
    styles: [`:host h1 { font-size:22px }`],
    template: `<h1>RM File Plan Component</h1><alfresco-document-list></alfresco-document-list>`
})
export class RmFilePlanComponent {

    @ViewChild(DocumentList)
    documentList: DocumentList;

    public reload(): void {
        this.documentList.reload();
    }
}
