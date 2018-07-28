import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MycardComponent } from './components/mycard/mycard.component';
import { DefaultService } from './default.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MycardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DefaultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
