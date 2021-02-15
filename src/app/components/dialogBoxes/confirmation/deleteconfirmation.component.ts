import { Component, Inject, OnInit, Input, EventEmitter, Output, ViewChild, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'deleteconfirmation',
    templateUrl: './deleteconfirmation.component.html',
    styleUrls: ['./deleteconfirmation.component.scss']
})

export class DeleteConfirmationComponent {
    buttonClickedEmt: EventEmitter<any> = new EventEmitter<any>();
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    buttonClicked(clickedButton: string) {

        this.buttonClickedEmt.emit({ 'event': clickedButton, 'id': this.data });
    }
}
