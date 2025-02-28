import { Routes } from '@angular/router';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { DisplayComponent } from './pages/display/display.component';

export const routes: Routes = [
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'display', component: DisplayComponent },
];
