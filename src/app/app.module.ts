import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NepaliDigitConverterService } from './nepali-digit-converter/nepali-digit-converter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NepaliDigitConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
