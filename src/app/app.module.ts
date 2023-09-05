import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SideNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
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
