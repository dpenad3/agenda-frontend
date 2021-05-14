import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage} from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    ComponentsModule, 
    HttpClientModule],
  providers: [ Camera, MediaCapture, Media, File, Storage,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
