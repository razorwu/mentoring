import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from "./demo/demo.component";
import {ChildComponent} from "./child/child.component";
import {AppComponent} from "./app.component";
import {CanDectivateThing} from "./routing-testing-module/demo-guard";
import {ResolverService} from "./routing-testing-module/demo-resolver";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MyInterceptor} from "./routing-testing-module/demo-interceptor";

const routes: Routes = [
  {path: '', component: DemoComponent},
  {path: 'child', component: ChildComponent, canDeactivate: [CanDectivateThing]},
  {
    path: 'routing-testing',
    resolve: {
      test: ResolverService
    },
    loadChildren: () => import('./routing-testing-module/routing-testing-module.module')
      .then(mod => mod.RoutingTestingModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDectivateThing, ResolverService,
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}]
})
export class AppRoutingModule {
}

// Home -> home module
// Contacts
// About
// Services - user service, ...
