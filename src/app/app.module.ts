import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { WorkingOnComponent } from './working-on/working-on.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    WorkingOnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
