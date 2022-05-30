import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from './tournament/tournament.component';

export interface Menu extends Route {
  title: string;
}

export const Menus: Menu[] = [
  { path: 'tournament', component: TournamentComponent, title: '比赛' },
];

const routes: Routes = [
  ...Menus,
  { path: '', redirectTo: 'tournament', pathMatch: 'full' },
  { path: '**', redirectTo: 'tournament', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'tournament',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
