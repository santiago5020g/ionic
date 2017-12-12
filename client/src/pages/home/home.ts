import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public data:any;

  constructor(public navCtrl: NavController,public http: Http) 
  {
    let header = new Headers();
    header.append('Accept','application/json');
    header.append('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYwYWQ1MGQ3ODQ2ZWZkMWRjMDg5NjI1ZjZmNWEwZDI0YzU3N2I0OTE0MTIzMmFmNDZjMTI4YTA1MzkxOTljZThhZmQ2ODBmOGEzZDY2MjA4In0.eyJhdWQiOiIxIiwianRpIjoiZjBhZDUwZDc4NDZlZmQxZGMwODk2MjVmNmY1YTBkMjRjNTc3YjQ5MTQxMjMyYWY0NmMxMjhhMDUzOTE5OWNlOGFmZDY4MGY4YTNkNjYyMDgiLCJpYXQiOjE1MDc4NzA4NDAsIm5iZiI6MTUwNzg3MDg0MCwiZXhwIjoxNTM5NDA2ODM5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ngbRayNYNZr8_LkmldiOiBzx1HyegFs7Wlbw31vq-cnBfcUWWXvYoClM3DO38iRlbN9MwpwytYkbFFmOcEUW4kLZ1YTduLqhbHmPCPyXomLe3ayuFbMatu0G5OyUZSvUqtpo9vwfgNShr4h_CiA36pmcR10l9KlX2H36o47MWtn0Hl7q661JX3HOqaisentZkNBSDM_0XZHPDVBGPTGREDUBIiXnPugFN0VxHKYuOsM2cYlRAyprVqgAUD4wzGHnQ-jTX1STVTqYMOWgzS5YUpppuxjMYF17vCheXcUGGO_9-72c671jbDsYfx42lkAYCYVB9DtV4gjUEyArkI53XBNhd4Bm90lJh_DyGRU-KEQyb3IpUFllvpR8uYmikZm5M5j75skh7mVhe7Ll37f6Aj9umXz1k4wpEcSavJom9GT6dZJrXv3OgMzUWmbQOI-fK9CbUvVB7U3uIr8bg5Dr79l8O7AUWjLpL1Gt1x_UL-gUKvhUrDvV1UI41CzFOvA5ExBQc-pW5vV0HhEY2yO8VkR7dTAgiMngIZC73G74UE78FSx0A29ILCMB-4UflK28heC2ejtLiWJ4hA9B7Xfbd4FW_WMwu5DqzhwXKEtgC-RyFKxy35ZXLe8JiSTmPZlmLbEXCpZSq_6OqVR9LPKLs2xEriWBU-Ev5V2prja1AAk');

    this.http.get('http://localhost:8000/api/liquen', {headers: header}).map(res=> res.json())
    .subscribe(
      data=>{
        this.data = data;
      },
      error=>{
        console.log('error');
      }
    );
    
  }

}
