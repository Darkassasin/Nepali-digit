import { Component } from '@angular/core';
import { NepaliDigitConverterService } from './nepali-digit-converter/nepali-digit-converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  digit:number;
  nepaliDigit:string="";

  constructor(private _digitConverter:NepaliDigitConverterService){}


  getnepaliDigit(digit):string{
    return this._digitConverter.convertToNepaliDigit(digit);
  }
  convert(){
    // let n:number=this.digit;
    // let m:number=0;
    // while(n!=0){
    //   m=n%10;
    //   n=Math.floor(n/10);
    //   this.totalDigit+=1;
    // }
    //  n=this.digit;
    //  m=0;
    // while(n!=0){
    //   console.log("totaldigit==>"+this.totalDigit);
    //   m=Math.floor(n/Math.pow(10,this.totalDigit-1));
    //   console.log(m);
    //   this.nepaliDigit=this.nepaliDigit + this.getnepaliDigit(m);
    //   n=n%Math.pow(10,this.totalDigit-1);
    //   this.totalDigit-=1;
    // }
    console.log(this.digit);
    this.nepaliDigit=this.getnepaliDigit(this.digit);
    console.log(this.nepaliDigit)
  }
}
