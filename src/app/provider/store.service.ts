import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Clip } from '../model/clip';
import { IFirebaseClip } from '../model/firebase-clip';
import { MapperService } from './mapper.service';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {
  private dummy_clips: Observable<IFirebaseClip> = Observable.from([
    {
      deviceType: 'PHONE',
      id: '-KZRjARQ3J2YDI005i4Y',
      senderEmail: 'nikwarke@gmail.com',
      text: 'hello',
      timestamp: 1482245846865
    },
    {
      deviceType: 'CHROME',
      id: '-KZRlOHZxf5SJzLEg3H8',
      senderEmail: 'nikwarke@gmail.com',
      text: 'this is chrome bro',
      timestamp: 1482246427995
    },
    {
      deviceType: 'PHONE',
      id: '-KZRn41NTrnKhKDoMYYI',
      senderEmail: 'nikwarke@gmail.com',
      text: 'this is phone, how you doing',
      timestamp: 1482246869197
    },
    {
      deviceType: 'PHONE',
      id: '-KZRn41NTrnKhKDoMYYI',
      senderEmail: 'nikwarke@gmail.com',
      text: 'this is phone, how you doing',
      timestamp: 1482246869197
    },
    {
      deviceType: 'PHONE',
      id: '-KZRn41NTrnKhKDoMYYI',
      senderEmail: 'nikwarke@gmail.com',
      text: 'this is phone, how you doing',
      timestamp: 1482246869197
    }
  ]);

  clips: Observable<IFirebaseClip>;
  items: Observable<any>;
  getClips(): Observable<Clip> {
    this.clips = this.dummy_clips;
    return this.clips.map(clip => this._mapper.mapFirebaseClipToClip(clip));
  }

  constructor(db: AngularFireDatabase, private _mapper: MapperService) {
    this.items = db.list('clip_items').valueChanges();
    this.items.subscribe(o => console.log(o));
  }
}
