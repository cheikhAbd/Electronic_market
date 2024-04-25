import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './component/content/content.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HeaderComponent } from './component/header/header.component';
<<<<<<< HEAD
=======
import { SignUpComponent } from './component/content/sign-up/sign-up.component';
>>>>>>> aae695e78f0d720e8843280dc2b9cfffdeace96e

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideBarComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    HeaderComponent,
    SignUpComponent
>>>>>>> aae695e78f0d720e8843280dc2b9cfffdeace96e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
