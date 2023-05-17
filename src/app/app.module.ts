import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PublicComponent} from './layouts/public/public.component';
import {DashboardComponent} from './layouts/dashboard/dashboard.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {
  ServicePublicListComponent
} from './screens/public/service-public/service-public-list/service-public-list.component';
import {PublicIndexComponent} from "./screens/public/public-index/public-index.component";
import {SignupComponent} from "./screens/public/authentication/signup/signup.component";
import {SigninComponent} from "./screens/public/authentication/signin/signin.component";
import {ServicePageComponent} from "./screens/public/service-public/service-page/service-page.component";
import {Route, RouterModule} from "@angular/router";
import {DashboardIndexComponent} from './screens/dashboard/dashboard-index/dashboard-index.component';
import {ServiceCrudComponent} from './screens/dashboard/service-crud/service-crud.component';
import {ServiceOrmComponent} from './screens/dashboard/service-orm/service-orm.component';
import {CategoryServiceCrudComponent} from './screens/dashboard/category-service-crud/category-service-crud.component';
import {CategoryServiceFormComponent} from './screens/dashboard/category-service-form/category-service-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";
import {ResetPasswordComponent} from "./screens/public/authentication/reset-password/reset-password.component";
import {VerificationComponent} from "./screens/public/authentication/verification/verification.component";

const routes: Route[] = [
  {
    path: '', component: AppComponent,
  },
  {
    path: 'public', component: PublicComponent, children: [
      {
        path: '', redirectTo: '/public/index', pathMatch: 'full'
      },
      {
        path: 'index', component: PublicIndexComponent
      },
      {
        path: 'auth', children: [
          {
            path: 'signup', component: SignupComponent
          },
          {
            path: 'login', component: SigninComponent
          },
          {
            path: 'reset-password', component: ResetPasswordComponent
          },
          {
            path: 'verification', component: VerificationComponent
          }
        ]
      },
      {
        path: 'services', children: [
          {
            path: '', component: ServicePublicListComponent
          },
          {
            path: ':id', component: ServicePageComponent
          }
        ]
      },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: '', redirectTo: '/dashboard/index', pathMatch: 'full'
      },
      {
        path: 'index', component: DashboardIndexComponent
      },
      {
        path: 'services', children: [
          {
            path: '', component: ServiceCrudComponent
          },
          {
            path: ':id', component: ServiceOrmComponent
          }
        ]
      },
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    DashboardComponent,
    PublicIndexComponent,
    SignupComponent,
    SigninComponent,
    ServicePageComponent,
    ServicePublicListComponent,
    DashboardIndexComponent,
    ServiceCrudComponent,
    ServiceOrmComponent,
    CategoryServiceCrudComponent,
    CategoryServiceFormComponent,
    VerificationComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('258734885752449')
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("")
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
