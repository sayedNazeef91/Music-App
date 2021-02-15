import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PlayListComponent } from './views/playlist/playlist.component';
import { EditPlayListComponent } from './views/editplaylist/editplaylist.component';
import { AddSongPlayListComponent } from './views/addsongplaylist/addsongplaylist.component';


@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/musicapp/home', pathMatch: 'full' },
        { path: 'musicapp/home', component: HomeComponent, pathMatch: 'full' },
        { path: 'musicapp/playlist', component: PlayListComponent, pathMatch: 'full' },
        { path: 'musicapp/playlist/edit/:id', component: EditPlayListComponent, pathMatch: 'full' },
        { path: 'musicapp/playlist/songs/:id', component: AddSongPlayListComponent, pathMatch: 'full' },
        { path: '**', redirectTo: '/musicapp/home' },
      ],
      { useHash: true },
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
