import { Component } from '@angular/core';
import { ZipPage } from '../zip-page/zip-page';
import { ZipSearchPage } from '../zip-search/zip-search';
/*
  https://www.thepolyglotdeveloper.com/2014/12/understanding-tabs-ionic-framework/
*/
@Component({
  selector: 'page-zip-tabs',
  templateUrl: 'zip-tabs.html'
})
export class ZipTabsPage {
  citySearchTab: any = ZipPage;
  zipSearchTab: any = ZipSearchPage;
  constructor() 
  {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZipTabsPage');
  }

}
