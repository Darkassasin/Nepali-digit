import {Injectable} from "@angular/core";
import {UnicodeDictionary} from "./unicode-dictionary.modal";
/**
 * Created by shreeson on 5/7/18.
 */
@Injectable()
export class UnicodeConverterService {
  unicodedictionary:UnicodeDictionary=new UnicodeDictionary();

  converttoUnicode(word):string{
    return this.unicodedictionary.unicode[word];
  }
}
