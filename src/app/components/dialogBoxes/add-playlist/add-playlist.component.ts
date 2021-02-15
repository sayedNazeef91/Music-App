import { Component, Inject, OnInit, Input, EventEmitter, Output, ViewChild, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'add-playlist',
    templateUrl: './add-playlist.component.html',
    styleUrls: ['./add-playlist.component.scss']
})

export class AddPlayListComponent {
    buttonClickedEmt: EventEmitter<any> = new EventEmitter<any>();
    playlistTitle: string = '';
    errorMessage: string = '';
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AddPlayListComponent>) { }

    buttonClicked(clickedButton: string) {

        let playLists = this.data || [];
        let playListAlreadyExist = playLists.filter((playListObj) => (
            (playListObj.title || '').trim().toLowerCase() === (this.playlistTitle || '').trim().toLowerCase()
        )).length > 0;

        if (playListAlreadyExist) {

            this.errorMessage = 'Playlist Already Exists';
        } else {

            this.dialogRef.close();
            this.errorMessage = '';
            this.buttonClickedEmt.emit({'event': 'save', 'title': this.playlistTitle});
        }
    }
}
