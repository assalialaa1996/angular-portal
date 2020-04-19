import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { IndexComponent } from './portal/developer/index/index.component';

import { DashboardComponent } from './portal/developer/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'developer', component: IndexComponent,children: [
        {path: 'dashboard', component:DashboardComponent}
    ]
    }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });