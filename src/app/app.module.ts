import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown'; 
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatList, MatListModule} from '@angular/material/list'; 
import {MatTreeModule} from '@angular/material/tree'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MarkdownModule.forRoot(), BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatTreeModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
