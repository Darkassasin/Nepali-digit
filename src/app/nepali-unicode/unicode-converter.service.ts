import {Injectable} from "@angular/core";
import {UnicodeDictionary} from "./unicode-dictionary.modal";
/**
 * Created by shreeson on 5/7/18.
 */
@Injectable()
export class UnicodeConverterService {
  unicode:string="";
  unicodedictionary:UnicodeDictionary=new UnicodeDictionary();
  converttoUnicode(word):string{
    console.log(this.unicodedictionary.unicode[word])
    this.unicode=this.unicodedictionary.unicode[word];
    console.log(this.unicode);
    return this.unicode;
  }
}
