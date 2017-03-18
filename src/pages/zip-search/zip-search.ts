import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { ZipCodeService } from '../../providers/zip-code-service';
/*
  Generated class for the ZipSearch page.
*/
@Component({
  selector: 'page-zip-search',
  templateUrl: 'zip-search.html',
  providers: [ZipCodeService]
})
export class ZipSearchPage {
  zipEntry:string;
  cityEntry:string;  
  stateEntry:string;
  states;
  public citiesString = '';
  public cityNames = [];
  public matchingRecords;
  public stateResult: string;
  public zipRecords: Array<any>;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public toastCtrl: ToastController,
  public zipProvider: ZipCodeService) {    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZipSearchPage');
  }
 
  zipSearch() {
     this.zipProvider.getCityByZip(this.zipEntry).subscribe(
       data => {
         if (data.results != undefined && data.results.cities != undefined)
         {
           this.matchingRecords = data.results.cities;
           this.stateResult = data.results.state;
           this.cityNames = [];
           for(let eachCity of this.matchingRecords)
           {
             this.cityNames.push(eachCity.city);
           }
           this.citiesString=this.cityNames.join(',');
           this.popupMessage('results for zip ' + this.zipEntry + ' is ' + this.citiesString);
         }
         else
         {
           this.popupMessage("Sorry, no results");
         }
         console.log(data.results);
       },
       err => {
         console.log(err);
       },
       () => console.log('Zip search completed')
     );    
  }

   popupMessage(alertMessage:string) {
      let toastMessage = this.toastCtrl.create({
          message: alertMessage,
          duration: 3000,
          position: 'middle'
      });

      toastMessage.onDidDismiss(() => {
          console.log('Dismissed popup message.');
      });

      toastMessage.present();
    }
}
