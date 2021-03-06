import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinlexBreadcrumbComponent } from './finlex-breadcrumb/finlex-breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinlexTableComponent } from './finlex-table/finlex-table.component';
import { FinlexRadioListComponent } from './finlex-radio-list/finlex-radio-list.component';
import { FinlexDragdropComponent } from './finlex-dragdrop/finlex-dragdrop.component';
import { FinlexProgressComponent } from './finlex-progress/finlex-progress.component';
import { FinlexDndDirective } from './finlex-dnd.directive';
import { FinlexCardComponent } from './finlex-card/finlex-card.component';
import { FinlexIconComponent } from './finlex-icon/finlex-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    FinlexBreadcrumbComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    FinlexTableComponent,
    FinlexRadioListComponent,
    FinlexDragdropComponent,
    FinlexProgressComponent,
    FinlexDndDirective,
    FinlexCardComponent,
    FinlexIconComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      // { path: '', component: FinlexBreadcrumbComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
