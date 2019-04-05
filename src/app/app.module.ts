import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AddSeoComponent } from './seo/add-seo/add-seo.component';
import { SeoService } from './seo/seo.service';
import { HomeRoutingModule } from './home/home-routing.module';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { NoopAnimationsModule , BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {NavComponent} from './shared/nav/nav.component';
import {SharedModule} from './shared/shared.module';
import {FooterComponent} from './shared/footer/footer.component';
import { from } from 'rxjs';
import { ProductRoutingModule } from './product/product-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddSeoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'seo'}),
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  }

