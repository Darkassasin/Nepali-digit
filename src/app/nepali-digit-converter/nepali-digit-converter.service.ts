import {Component, Injectable} from "@angular/core";

@Injectable()
export class NepaliDigitConverterService {
    nepaliDigit:string="";
    convert(entNumber): string {
        entNumber=String(entNumber);
        this.nepaliDigit="";
        let m: number = 0;
        let totalDigit = entNumber.length;
        let digitNo = totalDigit;
        let i = 1;
        let n: number = parseInt(entNumber);
        while (i <= digitNo) {
            m = Math.floor(n / Math.pow(10, totalDigit - 1));
            // console.log(m);
            this.nepaliDigit = this.nepaliDigit + this.getNepaliDigit(m);
            n = n % Math.pow(10, totalDigit - 1);
            totalDigit -= 1;
            i++;
            // console.log(this.nepaliDigit);
        }
        console.log(this.nepaliDigit);
        return this.nepaliDigit;
    }

    getNepaliDigit(digit): string {
        if (digit == 0) {
            return 'o';
        } else if (digit == 1) {
            return '१';
        } else if (digit == 2) {
            return '२';
        } else if (digit == 3) {
            return '३';
        } else if (digit == 4) {
            return '४';
        } else if (digit == 5) {
            return '५';
        } else if (digit == 6) {
            return '६';
        } else if (digit == 7) {
            return '७';
        } else if (digit == 8) {
            return '८';
        } else if (digit == 9) {
            return '९';
        }
    }
}
