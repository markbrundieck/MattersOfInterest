import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ZipCodeService } from '../../providers/zip-code-service';

@Component({
  templateUrl: 'zip-page.html',
  providers: [ZipCodeService]
})
export class ZipPage {
  public cityNames;
 public matchingRecords: Array<any>;
 public zipRecords: Array<any>;
 zipEntry:string;
 cityEntry:string;
 stateEntry:string;
 states;
  constructor(public navCtrl: NavController, 
  public toastCtrl: ToastController,
  public zipProvider: ZipCodeService) {
      this.states = [
       { name: 'ALABAMA', code: 'AL'},
    { name: 'ALASKA', code: 'AK'},
    { name: 'AMERICAN SAMOA', code: 'AS'},
    { name: 'ARIZONA', code: 'AZ'},
    { name: 'ARKANSAS', code: 'AR'},
    { name: 'CALIFORNIA', code: 'CA'},
    { name: 'COLORADO', code: 'CO'},
    { name: 'CONNECTICUT', code: 'CT'},
    { name: 'DELAWARE', code: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', code: 'DC'},
    { name: 'FLORIDA', code: 'FL'},
    { name: 'GEORGIA', code: 'GA'},
    { name: 'GUAM', code: 'GU'},
    { name: 'HAWAII', code: 'HI'},
    { name: 'IDAHO', code: 'ID'},
    { name: 'ILLINOIS', code: 'IL'},
    { name: 'INDIANA', code: 'IN'},
    { name: 'IOWA', code: 'IA'},
    { name: 'KANSAS', code: 'KS'},
    { name: 'KENTUCKY', code: 'KY'},
    { name: 'LOUISIANA', code: 'LA'},
    { name: 'MAINE', code: 'ME'},
    { name: 'MARSHALL ISLANDS', code: 'MH'},
    { name: 'MARYLAND', code: 'MD'},
    { name: 'MASSACHUSETTS', code: 'MA'},
    { name: 'MICHIGAN', code: 'MI'},
    { name: 'MINNESOTA', code: 'MN'},
    { name: 'MISSISSIPPI', code: 'MS'},
    { name: 'MISSOURI', code: 'MO'},
    { name: 'MONTANA', code: 'MT'},
    { name: 'NEBRASKA', code: 'NE'},
    { name: 'NEVADA', code: 'NV'},
    { name: 'NEW HAMPSHIRE', code: 'NH'},
    { name: 'NEW JERSEY', code: 'NJ'},
    { name: 'NEW MEXICO', code: 'NM'},
    { name: 'NEW YORK', code: 'NY'},
    { name: 'NORTH CAROLINA', code: 'NC'},
    { name: 'NORTH DAKOTA', code: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', code: 'MP'},
    { name: 'OHIO', code: 'OH'},
    { name: 'OKLAHOMA', code: 'OK'},
    { name: 'OREGON', code: 'OR'},
    { name: 'PENNSYLVANIA', code: 'PA'},
    { name: 'PUERTO RICO', code: 'PR'},
    { name: 'RHODE ISLAND', code: 'RI'},
    { name: 'SOUTH CAROLINA', code: 'SC'},
    { name: 'SOUTH DAKOTA', code: 'SD'},
    { name: 'TENNESSEE', code: 'TN'},
    { name: 'TEXAS', code: 'TX'},
    { name: 'UTAH', code: 'UT'},
    { name: 'VERMONT', code: 'VT'},
    { name: 'VIRGIN ISLANDS', code: 'VI'},
    { name: 'VIRGINIA', code: 'VA'},
    { name: 'WASHINGTON', code: 'WA'},
    { name: 'WEST VIRGINIA', code: 'WV'},
    { name: 'WISCONSIN', code: 'WI'},
    { name: 'WYOMING', code: 'WY' }
      ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZipPage');

  }
 citySearch() {

    this.popupMessage('city is ' + this.cityEntry + ' and state is ' + this.stateEntry);

    this.zipProvider.getZipsByCity(this.cityEntry, this.stateEntry).subscribe(
    data => {
      console.log(data);
      if (data.results != undefined)
      {
        this.zipRecords = [];
        for(let eachZip of data.results)
        {

          this.zipRecords.push(eachZip.zip);
          
        }
        
          //commented to use for debugging: this.popupMessage('results for city ' + this.cityEntry + ' is: ' + this.matchingRecords.join(','));
      }
      else
      {
        this.popupMessage("Sorry, no results");
      }
    },
    err => {
        console.log(err);
      },
      () => console.log('Search by city, state Complete')
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
