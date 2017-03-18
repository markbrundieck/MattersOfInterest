import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ZipCodeService {
    private baseUrl: string;
    private keyVal:string;
    constructor(private http: Http) {
        this.baseUrl = 'http://www.zipwise.com/webservices/';
        this.keyVal='key=ej8rw5jfgwlv45gx';
    }

    getCityByZip(zip: string)  {
        console.log(this.baseUrl + 'zipinfo.php?' + this.keyVal + '&format=json&zip=' + zip);
        return this.http.get(this.baseUrl + 'zipinfo.php?' + this.keyVal + '&format=json&zip=' + zip)
            .map(res => res.json());
    }
    getZipsByCity(city:string, state:string) {
        console.log(this.baseUrl + 'citysearch.php?'+ this.keyVal + '&format=json&string=' + city + '&state=' + state);
        return this.http.get(this.baseUrl + 'citysearch.php?'+ this.keyVal + '&format=json&string=' + city + '&state=' + state)
            .map(res => res.json());
  }

     handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
}
}