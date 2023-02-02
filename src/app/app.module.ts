import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { DiagonalComponent } from './diagonal/diagonal.component';
import { RestrictAreaComponent } from './restrict-area/restrict-area.component';
import { RestrictFormComponent } from './restrict-form/restrict-form.component';
import { FormsModule } from '@angular/forms';
import { DmzComponent } from './dmz/dmz.component';
import { TwrComponent } from './twr/twr.component';
import { ProjetovalecanadaComponent } from './projetovalecanada/projetovalecanada.component';
import { PackhubComponent } from './packhub/packhub.component';
import { AacdComponent } from './aacd/aacd.component';
import { CorrectaComponent } from './correcta/correcta.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    ProfileComponent,
    DiagonalComponent,
    RestrictAreaComponent,
    RestrictFormComponent,
    DmzComponent,
    TwrComponent,
    ProjetovalecanadaComponent,
    PackhubComponent,
    AacdComponent,
    CorrectaComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
