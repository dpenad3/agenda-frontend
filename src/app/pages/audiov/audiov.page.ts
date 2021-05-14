import { Component, OnInit, ViewChild } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { MediaCapture, MediaFile, CaptureVideoOptions } from '@ionic-native/media-capture/ngx'
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Storage } from '@ionic/storage'; 


const MEDIA_FILES_KEY = 'mediaFiles';
@Component({
  selector: 'app-audiov',
  templateUrl: './audiov.page.html',
  styleUrls: ['./audiov.page.scss'],
})
export class AudiovPage implements OnInit {

  @ViewChild('myvideo') myVideo: any;
  mediaFiles= [];
  constructor(private mediaCapture:MediaCapture, private storage:Storage, 
    private media:Media, private file:File) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res =>{
      this.mediaFiles = JSON.parse(res) || [];
    });
  }
  CaptureAudio(){
    
    this.mediaCapture.captureAudio().then(res =>{
      this.storeMediaFiles(res);
    });
  }

  CaptureVideo(){
    let options: CaptureVideoOptions = {
      limit: 1,
      duration: 60
    }
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) =>{
      let capturedFile = res[0];
      console.log('my file: ', capturedFile);

      let fileName = capturedFile.name;
      let dir = capturedFile['localURL'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');
      let toDirectory = this.file.dataDirectory;

      this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then(res =>{
        this.storeMediaFiles([{name: fileName, size: capturedFile.size}]);
      });
    });  
  }

  play(myFile){
    console.log('play: ', myFile);
    if (myFile.name.indexOf('.mp3') > -1){
      const audioFile: MediaObject = this.media.create(myFile.localURL);
      audioFile.play();
    }else {
      let path = this.file.dataDirectory + myFile.name;
      let url = path.replace(/^file:\/\//, '');
      let video = this.myVideo.nativeElement;
      video.src = url;
      video.play();
    }
  }

  storeMediaFiles(files){
    console.log('store: ', files);
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res){
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      }else{
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    });
  }
}
