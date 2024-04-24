import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './component/content/content.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { SignUpComponent } from './component/content/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideBarComponent,
    HeaderComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
