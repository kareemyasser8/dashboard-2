import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavStateComponent } from './top-nav-state/top-nav-state.component';
import { TopNavTabsComponent } from './top-nav-tabs/top-nav-tabs.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FormsModule } from '@angular/forms';
import { ExpenseCardComponent } from './expense-card/expense-card.component';

@NgModule({
  declarations: [AppComponent, SideNavComponent, TopNavComponent, HomeComponent, TopNavStateComponent, TopNavTabsComponent, DatePickerComponent, ExpenseCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private matIconRegistery: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistery.addSvgIcon(
      'gasStation',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/gas-station-svgrepo-com-1.svg'
      )
    );

    this.matIconRegistery.addSvgIcon(
      'update',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/update.svg'
      )
    );

    this.matIconRegistery.addSvgIcon(
      'PMS',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/PMS.svg'
      )
    );

    this.matIconRegistery.addSvgIcon(
      'controlRoom',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/control-room.svg'
      )
    );

    this.matIconRegistery.addSvgIcon(
      'dashboard',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/dashboard.svg'
      )
    );

    this.matIconRegistery.addSvgIcon(
      'dashboardApps',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/dashboard-apps.svg'
      )
    );

    this.matIconRegistery.addSvgIcon(
      'elements',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/elements.svg'
      )
    );

    this.matIconRegistery.addSvgIcon(
      'logout',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/logout.svg'
      )
    );

    this.matIconRegistery.addSvgIcon(
      'notifications',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/notifications.svg'
      )
    );

    this.matIconRegistery.addSvgIcon(
      'settings',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/settings.svg'
      )
    );
  }
}
