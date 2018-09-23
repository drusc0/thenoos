import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorsComponent } from './error/errors/errors.component';
import { ErrorsHandler} from './error/error-handler/errors-handler';
import { HttpService } from './services/http.service';
import { NotificationsService } from './services/notifications.service';
import { ErrorTestComponent } from './error-test/error-test.component';
import { NewsSourcesComponent } from './news-sources/news-sources.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "sources",
    component: NewsSourcesComponent,
  },
  {
    path: "errorTest",
    component: ErrorTestComponent,
  },
  {
    path: "error",
    component: ErrorsComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ErrorsComponent,
    ErrorTestComponent,
    NewsSourcesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [
    HttpService,
    NotificationsService,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
