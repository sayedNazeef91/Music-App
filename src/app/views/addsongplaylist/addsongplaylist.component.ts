import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { DataSourceService } from '../../services/datasource-service';
import { DataSourceConfigModel, DataSourceModel } from '../../services/models/chart';
import { Constants } from '../../services/helpers/constants';
import { TabsModel, MenuConfig, TabConfigModel } from '../../services/models/model';

@Component({
    selector: 'add-song-playlist',
    templateUrl: './addsongplaylist.component.html',
    styleUrls: ['./addsongplaylist.component.scss'],
})

export class AddSongPlayListComponent implements OnInit {

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
    songs = [];
    uISongs = [];
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
    searchedSongs = [];
    playList: any = {};
    playLists: any[] = [];
    selectedSongs: number[] = [];

    constructor(private dataSourceService: DataSourceService, public constants: Constants, private router: Router,
        private activeRoute: ActivatedRoute) { }

    ngOnInit() {

        let dataSourceConfig: any = this.dataSourceService.fetchData(this.viewDataSources);
        dataSourceConfig.songs().subscribe((songsRresponse) => {

            if (songsRresponse && songsRresponse.data) {

                this.songs = (songsRresponse.data || []);
                this.activeRoute.params.subscribe(routeParams => {

                    this.playLists = JSON.parse((window.localStorage.getItem('VBIplayLists')) || '[]') || [];
                    this.playList = this.playLists.filter((playListObj) => (playListObj.id.toString() === routeParams['id']))[0] || {};
                    this.songs = (this.songs || []).filter((song) => (this.playList.songs.indexOf(song.id)));
                });
                this.uISongs = ((this.searchTerm) ? this.searchedSongs : this.songs).slice(0, this.itemsSize + 1);
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
                    this.uISongs = ((this.searchTerm) ? this.searchedSongs : this.songs).slice(0, this.itemsSize + 1);
                }
            });
        });
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

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {

        if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 2)) {

            this.uISongs = this.uISongs.concat(((this.searchTerm) ? this.searchedSongs : this.songs).slice((this.uISongs.length + 1), ((this.uISongs.length * 2) + 1)));
        }
    }

    onSearchChange($event) {

        this.searchTerm = $event;
        this.uISongs = this.searchSongs().slice(0, this.itemsSize + 1);
    }

    searchSongs() {

        if (this.searchTerm) {

            let operatorRegex = new RegExp(this.searchTerm, 'igm');
            this.searchedSongs = this.songs.filter((songObj) => {

                return (((songObj['title'].match(operatorRegex) || []).length > 0) || ((songObj['album']['title'].match(operatorRegex) || []).length > 0) || ((songObj['album']['user']['user'].match(operatorRegex) || []).length > 0));
            });
            return this.searchedSongs;
        } else {

            this.searchedSongs = [];
            return this.songs;
        }
    }

    selectSong(id) {

       if (this.selectedSongs.indexOf(id) === -1) {

        this.selectedSongs.push(id);
       } else {

        this.selectedSongs.splice(this.selectedSongs.indexOf(id), 1);
       }
    }

    saveSongs() {

        this.playList.songs = (this.playList.songs || []).concat(this.selectedSongs) || [];
        this.playList.lastModifiedDate = new Date().getTime();
        this.playLists = this.playLists.map((playListObj) => {

            if (playListObj.id === this.playList.id) {

                playListObj = this.playList;
            }
            return playListObj;
        });
        localStorage.setItem('VBIplayLists', JSON.stringify(this.playLists));
        this.router.navigateByUrl('/musicapp/playlist/edit/' + this.playList.id);
    }

    cancelSelection() {

        this.selectedSongs = [];
    }
}