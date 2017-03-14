import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './Components//appheader/appheader.component';
import { AppfooterComponent } from './Components/appfooter/appfooter.component';
import { AppsettingsComponent } from './Components/appsettings/appsettings.component';
import { AppmenuComponent } from './Components/appmenu/appmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppsettingsComponent,
    AppmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
