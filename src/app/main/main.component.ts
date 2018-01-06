import { Component, OnInit } from '@angular/core';

import { Clip } from '../model/clip';
import { StoreService } from '../provider/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clips: Clip[] = [];

  constructor(private _store: StoreService) {}

  ngOnInit() {
    this._store.getClips().subscribe(clip => this.clips.push(clip));
  }
}
