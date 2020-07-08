// For Formatting the Salary Column

import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe,DecimalPipe } from '@angular/common';

@Pipe({name: 'customFormatter'})
export class CustomFormatterPipe implements PipeTransform {
    constructor(private currencyPipe: CurrencyPipe, private decimalPipe: DecimalPipe) { }
    transform(value: number, formatType: string) {
    if(formatType==="currency"){
        if(value>0&&value<1000){
            return "$"+value;
        }
        else if(value>=1000&&value<1000000){
            value=Math.round((value/1000)*100)/100
            return "$"+value+"K"
        }
        else if(value>=1000000&&value<1000000000){
            value=Math.round((value/1000000)*100)/100
            return "$"+value+"M"
        }
    }
    else if(formatType==="number"){
        return this.decimalPipe.transform(value);
    }
    else{
        return value
    }
  }
}