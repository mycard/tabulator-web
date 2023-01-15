import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastComponent } from './toast/toast.component';
import { TournamentComponent } from './tournament/tournament.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, ToastComponent, TournamentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ApiModule.forRoot({
      rootUrl: environment.production ? '' : 'http://localhost:3000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
