import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { HomeComponent, WorksComponent, ProfileComponent, DiagonalComponent, DmzComponent, TwrComponent, ProjetovalecanadaComponent, PackhubComponent, AacdComponent, CorrectaComponent } from './index';
import { RestrictAreaComponent } from 'src/app/restrict-area/restrict-area.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, data: { name: 'home' } },
  { path: 'home', component: HomeComponent, data: { name: 'home' } },
  { path: 'hello', component: WorksComponent, data: { name: 'hello' } },
  { path: 'profile', component: ProfileComponent, data: { name: 'profile' } },
  { path: 'diagonal', component: DiagonalComponent, data: { name: 'diagonal' } },
  { path: 'dmz', component: DmzComponent, data: { name: 'dmz' } },
  { path: 'twr', component: TwrComponent, data: { name: 'twr' } },
  { path: 'projetovalecanada', component: ProjetovalecanadaComponent, data: { name: 'projetovalecanada' } },
  { path: 'packhub', component: PackhubComponent, data: { name: 'packhub' } },
  { path: 'aacd', component: AacdComponent, data: { name: 'aacd' } },
  { path: 'correcta', component: CorrectaComponent, data: { name: 'correcta' } },
  { path: 'area-restrita', component: RestrictAreaComponent, canActivate: [AuthGuard], data: { name: 'area restrita' } },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
