import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { DataSourceService } from '../../services/datasource-service';
import { Constants } from '../../services/helpers/constants';
import { TabsModel, MenuConfig, TabConfigModel } from '../../services/models/model';
import { DateUtilityService } from '../../services/date-utilities';
import { DataSourceConfigModel, DataSourceModel } from '../../services/models/chart';
import { ObjectUtilities } from '../../services/object-utilities';
import { ArrayUtilities } from '../../services/array-utilities';

@Component({
    selector: 'edit-playlist',
    templateUrl: './editplaylist.component.html',
    styleUrls: ['./editplaylist.component.scss'],
})

export class EditPlayListComponent implements OnInit {

    usersDataConfig: DataSourceConfigModel = {
        'url': 'https://jsonplaceholder.typicode.com/users',
        'type': 'GET',
        'body': null,
        'params': null,
        'headers': null
    };

    albumsDataConfig: DataSourceConfigModel = {
        'url': 'https://jsonplaceholder.typicode.com/albums',
        'type': 'GET',
        'body': null,
        'params': null,
        'headers': null
    };

    songsDataConfig: DataSourceConfigModel = {
        'url': 'https://jsonplaceholder.typicode.com/photos',
        'type': 'GET',
        'body': null,
        'params': null,
        'headers': null
    };

    viewDataSources: DataSourceModel[] = [{
        'id': 1,
        'dataSourceName': 'users',
        'config': this.usersDataConfig
    }, {
        'id': 2,
        'dataSourceName': 'albums',
        'config': this.albumsDataConfig
    }, {
        'id': 3,
        'dataSourceName': 'songs',
        'config': this.songsDataConfig
    }];

    userMap: any = {};
    albumMap: any = {};
    playLists: any[] = [];
    playList: any = {};
    originalPlayList: any = {};
    playListSongs: any[] = [];
    songs: any[] = [];
    uISongs = [];
    itemsSize = 30;
    sortedOrder = [];

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
    searchedSongs = [];
    playListTitle = '';
    errorMessage = '';
    noSongsFound: boolean = false;

    constructor(private dataSourceService: DataSourceService,
        public constants: Constants,
        private dateUtilityService: DateUtilityService,
        private router: Router,
        private activeRoute: ActivatedRoute,
        private objectUtilities: ObjectUtilities,
        private arrayUtilities: ArrayUtilities) { }

    ngOnInit() {

        try {

            let dataSourceConfig: any = this.dataSourceService.fetchData(this.viewDataSources);
            dataSourceConfig.songs().subscribe((songsRresponse) => {

                if (songsRresponse && songsRresponse.data) {

                    this.songs = (songsRresponse.data || []);
                }
            });

            dataSourceConfig.users().subscribe((usersResponse) => {

                if (usersResponse && usersResponse.data) {

                    this.userMap = this.createMap(usersResponse.data, 'id');
                }

                dataSourceConfig.albums().subscribe((albumsResponse) => {

                    if (albumsResponse && albumsResponse.data) {

                        let albums = (albumsResponse.data || []).map((album) => {

                            album['user'] = { 'id': album.userId, 'user': (this.userMap[album.userId] || {}).name };
                            return album;
                        });

                        this.albumMap = this.createMap(albums, 'id');
                        this.songs = (this.songs || []).map((song) => {

                            song['album'] = { 'id': song.albumId, 'title': (this.albumMap[song.albumId] || {}).title, 'user': (this.albumMap[song.albumId] || {}).user };
                            return song;
                        });

                        this.activeRoute.params.subscribe(routeParams => {

                            this.playLists = JSON.parse((window.localStorage.getItem('VBIplayLists'))) || [];
                            this.playList = this.playLists.filter((playListObj) => (playListObj.id.toString() === routeParams['id']))[0] || {};
                            this.playListTitle = this.playList.title;
                            this.originalPlayList = JSON.parse(JSON.stringify(this.playList));
                            this.playListSongs = this.getPlayListSongs();
                            this.uISongs = (((this.searchTerm) ? this.searchedSongs : (this.playListSongs || [])) || []);
                            this.noSongsFound = (this.uISongs.length === 0);
                        });
                    }
                });
            });

        } catch (error) {

            this.playList = {};
        }
    }

    createMap(data, field) {

        data = data || [];
        field = field || 'id';
        let dataMap = {};

        for (let dataObj of data) {

            dataMap[dataObj[field]] = dataObj;
        }

        return dataMap;
    }

    onSearchChange($event) {

        this.searchTerm = $event;
        this.uISongs = this.searchSong().slice(0, this.itemsSize + 1);
        this.noSongsFound = (this.uISongs.length === 0);
    }

    getPlayListSongs() {

        let filterSongs = this.songs.filter((songObj) => ((this.playList.songs || []).indexOf(songObj.id) >= 0));
        return filterSongs.sort((a, b) => ((this.playList.songs.indexOf(a.id) - this.playList.songs.indexOf(b.id))));
    }

    searchSong() {

        if (this.searchTerm) {

            let operatorRegex = new RegExp(this.searchTerm, 'igm');
            this.searchedSongs = (this.playListSongs || []).filter((playListObj) => {

                return (((playListObj['title'].match(operatorRegex) || []).length > 0));
            });
            return this.searchedSongs.sort((a, b) => ((this.playList.songs.indexOf(a.id) - this.playList.songs.indexOf(b.id))));
        } else {

            this.searchedSongs = [];
            return (this.playListSongs || []);
        }
    }

    getTime(time) {

        return this.dateUtilityService.convertTimeInterval(time);
    }

    removeSongFromPlayList(id) {

        this.playList.songs = (this.playList.songs || []).filter((song) => (song !== id));
        this.playListSongs = this.getPlayListSongs();
        this.uISongs = (this.uISongs || []).filter((song) => (song.id !== id));
        this.noSongsFound = (this.uISongs.length === 0);
    }

    addSongs() {

        this.router.navigateByUrl('/musicapp/playlist/songs/' + this.playList.id);
    }

    drop(event: CdkDragDrop<any[]>) {

        if (event.previousContainer === event.container) {

            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            this.playList.songs = this.arrayUtilities.move(this.playList.songs, event.previousIndex, event.currentIndex);
        }
    }

    savePlayList() {

        let playListExists = (this.playLists.filter((playList) => ((playList.id !== this.playList.id) && (playList.title.toLowerCase() === this.playListTitle.toLowerCase())))).length > 0;
        if (!playListExists) {

            this.errorMessage = '';
            this.playList.lastModifiedDate = new Date().getTime();
            this.playLists = this.playLists.map((playListObj) => {

                if (playListObj.id === this.playList.id) {

                    playListObj = this.playList;
                }
                return playListObj;
            });
            this.originalPlayList = JSON.parse(JSON.stringify(this.playList));
            localStorage.setItem('VBIplayLists', JSON.stringify(this.playLists));
        } else {

            this.errorMessage = 'This playlist already exists.';
        }
    }

    cancelEdit() {

        this.playList = JSON.parse(JSON.stringify(this.originalPlayList));
        this.playListSongs = this.getPlayListSongs();
        this.uISongs = (((this.searchTerm) ? this.searchedSongs : (this.playListSongs || [])) || []);
        this.noSongsFound = (this.uISongs.length === 0);
    }

    compareObject(playList1, playList2) {

        return this.objectUtilities.compareObject(playList1, playList2);
    }

    titleChanged() {

        this.playList.title = this.playListTitle;
    }
}