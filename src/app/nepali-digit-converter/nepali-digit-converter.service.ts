import {Component, Injectable} from "@angular/core";

@Injectable()
export class NepaliDigitConverterService{
    getNepaliDigit(digit):string{
        if(digit == 0){
            return '0';
        }else if(digit ==1 ){
            return '१';
        }else if(digit == 2){
            return '२';
        }else if(digit == 3){
            return '३';
        }else if(digit == 4){
            return '४';
        }else if(digit == 5){
            return '५';
        }else if(digit == 6){
            return '६';
        }else if(digit == 7){
            return '७';
        }else if(digit == 8){
            return '८';
        }else if(digit == 9){
            return '९';
        }
    }
}