import { Component, OnInit } from '@angular/core';
import { Sermon } from './sermon.model';
import { SermonsService } from './sermons.service';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})
export class SermonsComponent implements OnInit {
  sermons: Sermon[] = [];

  constructor(private sermonsService: SermonsService) { }

  ngOnInit() {
    this.sermonsService.getSermons().subscribe((result) => {
      this.sermons = result.sermons;
    });
  }

  formatDate(sermonDate: Date) {
    return new Date(sermonDate).toLocaleDateString();
  }
}
