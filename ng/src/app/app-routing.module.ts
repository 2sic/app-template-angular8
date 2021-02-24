/*  ---------------------------------------------------------------------------
    Tutorial
    ---------------------------------------------------------------------------
    This routing file configures the paths which the app knows.

    Since it's a simple example, it is all in one file.
    More complex apps and apps with lazy-loading will have multiple such files.
    ---------------------------------------------------------------------------
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './parts/team/team.component';
import { ApiDemoComponent } from './parts/api/api-demo.component';
import { IntroductionComponent } from './parts/introduction/introduction.component';
import { DebugComponent } from './parts/debug/debug.component';
import { IntroIntegrateComponent } from './parts/introduction/pages/integrate.component';
import { IntroRoutingComponent } from './parts/introduction/pages/routing.component';

const routes: Routes = [
  { path: 'intro', component: IntroductionComponent, children: [
      { path: 'integrate', component: IntroIntegrateComponent },
      { path: 'routing', component: IntroRoutingComponent }
    ]
  },
  { path: 'team', component: TeamComponent },
  { path: 'team/:name', component: TeamComponent },
  { path: 'api', component: ApiDemoComponent },
  { path: 'debug', component: DebugComponent },
  { path: '**', redirectTo: '/intro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
