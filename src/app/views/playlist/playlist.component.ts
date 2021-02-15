import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../services/helpers/constants';
import { TabsModel, MenuConfig, TabConfigModel } from '../../services/models/model';
import { AddPlayListComponent } from '../../components/dialogBoxes/add-playlist/add-playlist.component';
import { DateUtilityService } from '../../services/date-utilities';
import { DeleteConfirmationComponent } from '../../components/dialogBoxes/confirmation/deleteconfirmation.component';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
})

export class PlayListComponent implements OnInit {

    playLists = [];
    uIplayLists = [];
    itemsSize = 30;

    tabs: TabsModel[] = [
        {
            display: true,
            text: 'All Songs',
            link: '/musicapp/home',
            value: 'all-songs',
            sequence: 1,
            isMenuItem: false
        },
        {
            display: true,
            text: 'Play Lists',
            link: '/musicapp/playlist',
            value: 'playlist',
            sequence: 2,
            isMenuItem: false
        }
    ];

    tabsMenu: MenuConfig = {
        display: false,
        text: 'Menu'
    };

    tabsConfig: TabConfigModel = {
        display: true,
        useComponents: false,
        menuConfig: this.tabsMenu,
        tabs: this.tabs
    };

    searchTerm = '';
    selectedTab = 'playlist';
    searchedPlayLists = [];

    constructor(public constants: Constants,
        private dialog: MatDialog,
        private dateUtilityService: DateUtilityService,
        private router: Router,
        private activeRoute: ActivatedRoute) { }

    ngOnInit() {

        try {

            this.playLists = (JSON.parse((window.localStorage.getItem('VBIplayLists'))) || []).sort((a, b) => ((a.id - b.id) * 1));
        } catch (error) {

            this.playLists = [];
        }

        this.uIplayLists = (((this.searchTerm) ? this.searchedPlayLists : this.playLists) || []).slice(0, this.itemsSize + 1);
    }


    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {

        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {

            this.uIplayLists = this.uIplayLists.concat(((this.searchTerm) ? this.searchedPlayLists : this.playLists).slice((this.uIplayLists.length + 1), ((this.uIplayLists.length * 2) + 1)));
        }
    }

    onSearchChange($event) {

        this.searchTerm = $event;
        this.uIplayLists = this.searchPlaylist().slice(0, this.itemsSize + 1);
    }

    searchPlaylist() {

        if (this.searchTerm) {

            let operatorRegex = new RegExp(this.searchTerm, 'igm');
            this.searchedPlayLists = this.playLists.filter((playListObj) => {

                return (((playListObj['title'].match(operatorRegex) || []).length > 0));
            });
            return this.searchedPlayLists;
        } else {

            this.searchedPlayLists = [];
            return (this.playLists || []);
        }
    }

    openPlayListPopup() {

        const dialogRef = this.dialog.open(AddPlayListComponent, {
            data: (this.playLists || [])
        });

        const subscribeDialog = dialogRef.componentInstance.buttonClickedEmt.subscribe((data) => {

            if (data.event === 'save') {

                let dated = new Date().getTime();
                this.playLists.push({ 'id': this.playLists.length + 1, 'title': data.title, 'songs': [], 'createdDate': dated, 'lastModifiedDate': dated });
                window.localStorage.setItem('VBIplayLists', JSON.stringify(this.playLists));
                this.uIplayLists = this.searchPlaylist().slice(0, this.itemsSize + 1);
                console.log('playlist added successfully');
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            subscribeDialog.unsubscribe();
        });
    }

    getTime(time) {

        return this.dateUtilityService.convertTimeInterval(time);
    }

    deletePlayListPopup(id) {

        const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
            data: id
        });

        const subscribeDialog = dialogRef.componentInstance.buttonClickedEmt.subscribe((data) => {

            if (data.event === 'delete') {

                this.playLists = this.playLists.filter((playListObj) => (playListObj.id !== data.id));
                window.localStorage.setItem('VBIplayLists', JSON.stringify(this.playLists));
                this.uIplayLists = this.searchPlaylist().slice(0, this.itemsSize + 1);
                console.log('playlist deleted successfully');
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            subscribeDialog.unsubscribe();
        });
    }

    editPlaylist(id) {

        this.router.navigateByUrl('/musicapp/playlist/edit/' + id);
    }
}