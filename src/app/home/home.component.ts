import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public _album: Array<any> = [];
  public _banner: Array<any> = [];
  model: any = {
    Assunto: "Quero ir no CCS 2019"
  };

  images = [
    "assets/images/banner/3.jpg",
    "assets/images/banner/2.jpg",
    "assets/images/banner/1.jpg"
  ]

  title = 'Caldas Country Show 2019 - Esperamos por vocês!';
  text:any = {
    Year: 'Ano',
    Month: 'Mes',
    Weeks: "Semanas",
    Days: "Dias",
    Hours: "Horas",
    Minutes: "Minutos",
    Seconds: "Segundos",
    MilliSeconds: "Milisegundos"
  };
  
  constructor(public _lightbox: Lightbox) {
    for (let i = 1; i <= 92; i++) {
      const src = 'assets/images/fotos/' + i + '.jpg';
      const caption = 'Caldas Country Show 2018';
      const album = {
         src: src,
         caption: caption
      };
 
      this._album.push(album);
    }    
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit() {
    
  }

}
