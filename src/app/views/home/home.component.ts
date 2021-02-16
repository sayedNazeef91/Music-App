import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { DataSourceService } from '../../services/datasource-service';
import { DataSourceConfigModel, DataSourceModel } from '../../services/models/chart';
import { Constants } from '../../services/helpers/constants';
import { TabsModel, MenuConfig, TabConfigModel } from '../../services/models/model';

@Component({
  selector: 'app-music',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

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
      text: 'Playlists',
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
  selectedTab = 'all-songs';
  searchedSongs = [];
  noSongsFound: boolean = false;

  constructor(private dataSourceService: DataSourceService, public constants: Constants) { }

  ngOnInit() {

    let dataSourceConfig: any = this.dataSourceService.fetchData(this.viewDataSources);
    dataSourceConfig.songs().subscribe((songsRresponse) => {

      if (songsRresponse && songsRresponse.data) {

        this.songs = (songsRresponse.data || []);
        let allSongs = ((this.searchTerm) ? this.searchedSongs : this.songs);
        this.uISongs = allSongs.slice(0, this.itemsSize + 1);
        this.noSongsFound = allSongs.length === 0;
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
          let allSongs =  ((this.searchTerm) ? this.searchedSongs : this.songs);
          this.uISongs = allSongs.slice(0, this.itemsSize + 1);
          this.noSongsFound = allSongs.length === 0;
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
    let allSongs = this.searchSongs();
    this.uISongs = allSongs.slice(0, this.itemsSize + 1);
    this.noSongsFound = allSongs.length === 0;
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
}
