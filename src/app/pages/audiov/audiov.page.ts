import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { MediaCapture, MediaFile, CaptureVideoOptions } from '@ionic-native/media-capture/ngx'
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Storage } from '@ionic/storage'; 
import { ActivitiesPatientService } from 'src/app/services/activitiesPatient.service';
import Swal from 'sweetalert2';


const MEDIA_FILES_KEY = 'mediaFiles';
@Component({
  selector: 'app-audiov',
  templateUrl: './audiov.page.html',
  styleUrls: ['./audiov.page.scss'],
})
export class AudiovPage implements OnInit {

  @ViewChild('myvideo') myVideo: any;
  mediaFiles= [];
  id: number;

  constructor(private mediaCapture:MediaCapture, 
    private storage:Storage, 
    private media:Media, 
    private file:File,
    protected router:Router, 
    protected route:ActivatedRoute,
    protected service: ActivitiesPatientService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
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

  onSubmitTemplate(){
    this.service.delete(this.id).subscribe(m =>{
      Swal.fire('Actividad reportada','success');
      this.router.navigate(['/options']);
    }, err=>{
      if(err.status === 400){
        Swal.fire('Error en el reporte',`${err}`,'error');
      }
    });
  }
}
