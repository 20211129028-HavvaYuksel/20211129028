import { MytoastService } from 'src/app/services/mytoast.service';
import { KategoriComponent } from './components/kategori/kategori.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FbservisService } from './services/fbservis.service';
import { HaberlerComponent } from './components/haberler/haberler.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LazyLoadImageModule} from 'ng-lazyload-image';
import { UyeComponent } from './components/uye/uye.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KategoriComponent,
    UyeComponent,
    HaberlerComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HotToastModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    provideStorage(() => getStorage()),
    LazyLoadImageModule,
    HttpClientModule
  ],
  providers: [ FbservisService, MytoastService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
