import { Component, OnInit } from '@angular/core';
import { JournalService } from 'src/app/services/journal.service';
import { Journal } from 'src/app/shared/models/journal.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  journals!: Journal[];

  constructor(private js: JournalService) {}

  ngOnInit(): void {
    this.js.getJournal().subscribe((data) => {
      this.journals = data;
    });
  }
}
