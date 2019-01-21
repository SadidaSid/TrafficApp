import {AfterViewInit, Component} from '@angular/core';
import {DataServiceService} from '../data-service.service';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import {HttpClient} from '@angular/common/http';
import {Platform} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  albums: any ;
  latitude: any;
  longitude: any;
  addstring = 'berlin';
    SouthLatitude: number;
    WestLongitude: number;
    NorthLatitude: number;
    EastLongitude: number;
    maparea = '45.219,-122.325,47.610,-122.107';
    BingMapsKey = 'Au69BFgf1rqLHIuPuWKu71_aB72mgdgcmWbBIT-mNw8Dr2RQL20B7VK6uIs8tWHI';
    dataUrl: any;
    mainobj: any;
    accidents: any;
    word: any;
    accident: any;
    no_of_incidents: any;
    mycolor: any;
   N: number;
  err: any;
     constructor(private ds: DataServiceService, private nativeGeocoder: NativeGeocoder, private http: HttpClient, public plt: Platform) {
     }

submitlocation() {
    const options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };


  //  this.ds.load().subscribe(data => { this.albums = data ; console.log(this.albums[1]); const obj = this.albums[1];
    // console.log( obj.birthDate);
    // } );
this.plt.ready().then(() => {
    this.nativeGeocoder.forwardGeocode(this.addstring, options)
        .then((coordinates: NativeGeocoderForwardResult[]) => {
            this.latitude = coordinates[0].latitude;
            this.longitude = coordinates[0].longitude;
            console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
            console.log('ffff' + parseFloat(this.latitude).toFixed(3));
            console.log('fff' + parseFloat(this.longitude).toFixed(3));
            this.N = parseFloat(parseFloat(this.latitude).toFixed(3));
            this.SouthLatitude =  parseFloat(parseFloat(this.latitude).toFixed(3)) - 1;
            this.WestLongitude =   parseFloat(parseFloat(this.longitude).toFixed(3)) + 0.1 ;
            this.NorthLatitude =  1 + parseFloat(parseFloat(this.latitude).toFixed(3)) ;
            this.EastLongitude = parseFloat(parseFloat(this.longitude).toFixed(3)) - 0.1;
            console.log('sothlat=' + this.SouthLatitude);
            console.log('westlog=' + this.WestLongitude);
            console.log('Nortlat=' + this.NorthLatitude);
            console.log('Eastlong=' + this.EastLongitude);

            this.maparea = '' + this.SouthLatitude + ',' + this.WestLongitude + ',' + this.NorthLatitude + ',' + this.EastLongitude;
            console.log('maparea=' + this.maparea);
            this.dataUrl = 'http://dev.virtualearth.net/REST/v1/Traffic/Incidents/' + this.maparea + '?key=' + this.BingMapsKey;
            this.http.get(this.dataUrl).subscribe(data => { this.mainobj = data ; console.log(this.mainobj.resourceSets);
                this.word = this.mainobj.resourceSets[0]; this.no_of_incidents = this.word.estimatedTotal; console.log('total accidents '
                    + this.word.estimatedTotal);
                this.accidents = this.word.resources;
                this.accident = this.accidents[0]; }  );
        }).catch((error: any) => {
        console.log(error);
        this.err = error;
    });

});
}

do1() {
    this.dataUrl = 'http://dev.virtualearth.net/REST/v1/Traffic/Incidents/' + this.maparea + '?key=' + this.BingMapsKey;
    this.http.get(this.dataUrl).subscribe(data => { this.mainobj = data ; console.log(this.mainobj.resourceSets);
    this.word = this.mainobj.resourceSets[0]; this.no_of_incidents = this.word.estimatedTotal; console.log('total accidents '
            + this.word.estimatedTotal);
    this.accidents = this.word.resources;
    this.accident = this.accidents[0]; }  );
}
setcolor(item) {
    if (item === 4) { this.mycolor = 'red'; return this.mycolor;  }
    if (item === 3) { this.mycolor = 'orange';   return this.mycolor; }
    if (item === 2) { this.mycolor = 'green';  return this.mycolor;  }
    if (item === 1) { this.mycolor = 'yellow';   return this.mycolor; }
}

}
