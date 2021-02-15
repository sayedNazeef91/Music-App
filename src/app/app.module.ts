import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material-module';

import { AppComponent } from './app.component';
import { RestConnector } from './services/rest-connector';
import { Constants } from './services/helpers/constants';
import { DateUtilityService } from './services/date-utilities';
import { ArrayUtilities } from './services/array-utilities';

import { HomeComponent } from './views/home/home.component';
import { PlayListComponent } from './views/playlist/playlist.component';
import { DataSourceService } from './services/datasource-service';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AddPlayListComponent } from './components/dialogBoxes/add-playlist/add-playlist.component';
import { DeleteConfirmationComponent } from './components/dialogBoxes/confirmation/deleteconfirmation.component';
import { EditPlayListComponent } from './views/editplaylist/editplaylist.component';
import { AddSongPlayListComponent } from './views/addsongplaylist/addsongplaylist.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ObjectUtilities } from './services/object-utilities';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayListComponent,
    SearchBoxComponent,
    AddPlayListComponent,
    DeleteConfirmationComponent,
    EditPlayListComponent,
    AddSongPlayListComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RestConnector,
    Constants,
    DateUtilityService,
    ArrayUtilities,
    DataSourceService,
    ObjectUtilities
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
