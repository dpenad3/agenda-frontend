import { Component, OnInit } from '@angular/core';
import { MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx'

@Component({
  selector: 'app-audiov',
  templateUrl: './audiov.page.html',
  styleUrls: ['./audiov.page.scss'],
})
export class AudiovPage implements OnInit {

  constructor(public mediaCapture:MediaCapture) { }

  ngOnInit() {
  }

  CaptureAudio(){
    this.mediaCapture.captureAudio().then((audio:MediaFile[])=>{

    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  CaptureVideo(){
    this.mediaCapture.captureVideo().then((video:MediaFile[])=>{

    },(err)=>{
      alert(JSON.stringify(err));
    })  
  }
}
