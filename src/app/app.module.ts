import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { MovieSearchPage } from '../pages/movie-search/movie-search';
import { QuotesPage } from '../pages/quotes/quotes';
import { ZipPage } from '../pages/zip-page/zip-page';

@NgModule({
  declarations: [
    MyApp,
    Page1,
	  MovieInfoPage,
	  MovieSearchPage,
    QuotesPage,
    ZipPage
    
    
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
    ZipPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
