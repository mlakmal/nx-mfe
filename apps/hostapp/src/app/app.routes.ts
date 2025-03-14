import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'remoteapp',
    loadChildren: () =>
      loadRemote<typeof import('remoteapp/Routes')>('remoteapp/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'subremoteapp',
    loadChildren: () =>
      loadRemote<typeof import('subremoteapp/Routes')>('subremoteapp/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
