import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JournalService } from 'src/app/services/journal.service';
import { createJournalDTO, Journal } from 'src/app/shared/models/journal.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  journalForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private js: JournalService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.journalForm = this.initForm();
  }

  initForm() {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  createNewJournal() {
    let journal = this.journalForm.value;
    let newJounal: createJournalDTO = { user_profile: 1, ...journal };
    this.js.createJournal(newJounal).subscribe(() => {
      console.log('created', newJounal);
    });
    this.route.navigate(['journal/feed']);
  }
}
