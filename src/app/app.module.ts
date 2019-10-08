import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { StyleDirective } from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { LOCALE_ID } from '@angular/core';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FiltePipe } from './pipes/filte.pipe';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './components/form/form.component';
import { SwitchComponent } from './components/switch/switch.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HttpclientComponent } from './components/httpclient/httpclient.component';
import { AuthInterceptor } from './auth.interceptor';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AboutExtraComponent } from './components/about-extra/about-extra.component';
import { PostsComponent } from './components/posts/posts.component';
registerLocaleData(localeRu, 'ru');

const INTERCEPTOR_PROVEDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    IfnotDirective,
    MultByPipe,
    ExMarksPipe,
    FiltePipe,
    CounterComponent,
    FormComponent,
    SwitchComponent,
    RxjsComponent,
    HttpclientComponent,
    AboutComponent,
    HomeComponent,
    AboutExtraComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    // INTERCEPTOR_PROVEDER
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
