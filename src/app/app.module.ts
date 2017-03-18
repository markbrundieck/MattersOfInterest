import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { MovieSearchPage } from '../pages/movie-search/movie-search';
import { QuotesPage } from '../pages/quotes/quotes';
import { ZipSearchPage } from '../pages/zip-search/zip-search';
import { ZipPage } from '../pages/zip-page/zip-page';
import { ZipTabsPage } from '../pages/zip-tabs/zip-tabs';

@NgModule({
  declarations: [
    MyApp,
    Page1,
	  MovieInfoPage,
	  MovieSearchPage,
    QuotesPage,
    ZipPage,
    ZipSearchPage,
    ZipTabsPage   
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    MovieInfoPage,
	  MovieSearchPage,
    QuotesPage,
    ZipPage,
    ZipSearchPage,
    ZipTabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
