import { Injectable } from '@angular/core';
import { Clip } from '../model/clip';
import { IFirebaseClip } from '../model/firebase-clip';
import { Device } from '../model/device';

@Injectable()
export class MapperService {
  public mapFirebaseClipToClip(f_clip: IFirebaseClip): Clip {
    const clip = new Clip();
    clip.deviceType = Device[f_clip.deviceType];
    clip.id = f_clip.id;
    clip.senderEmail = f_clip.senderEmail;
    clip.text = f_clip.text;
    clip.timestamp = new Date(f_clip.timestamp);
    return clip;
  }

  constructor() {}
}
