import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ZipCodeService } from '../../providers/zip-code-service';

@Component({
  templateUrl: 'zip-page.html',
  providers: [ZipCodeService]
})
export class ZipPage {
 public matchingRecords: Array<any>;
 public zipRecords: Array<any>;
 zipEntry:string;
 cityEntry:string;
 stateEntry:string;
  constructor(public navCtrl: NavController, 
  public toastCtrl: ToastController,
  public zipProvider: ZipCodeService) {
    this.zipEntry='65616';
    this.cityEntry="Denver";
    this.stateEntry="CO";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZipPage');

  }
  
  citySearch() {
    
    this.popupMessage('city is ' + this.cityEntry + ' and state is ' + this.stateEntry);

    this.zipProvider.getZipsByCity(this.cityEntry, this.stateEntry).subscribe(
      data => {
        this.zipRecords = data.results;
        console.log(data);
      },
      err => {
          console.log(err);
        },
        () => console.log('Search by city, state Complete')
      );
      }


  zipSearch() {
    this.popupMessage('Zip from control ' + this.zipEntry);
     this.zipProvider.getCityByZip(this.zipEntry).subscribe(
       data => {
         if (data.results != undefined)
         {
           this.matchingRecords = data.results;
         }
         console.log(data.results);
       },
       err => {
         console.log(err);
       },
       () => console.log('Zip search completed')
     );
       

    if (this.matchingRecords == undefined)
    {
        this.popupMessage('Sorry, no results.');
    }
    else
    {
      this.popupMessage('results for zip ' + this.zipEntry + ' is ' + this.matchingRecords[0]);
    }
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
