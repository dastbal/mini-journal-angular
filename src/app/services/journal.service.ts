import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  createJournalDTO,
  Journal,
  updateJournalDTO,
} from '../shared/models/journal.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private apiUrl = `${environment.api}journal/`;

  constructor(private http: HttpClient) {}

  getJournal() {
    return this.http.get<Journal[]>(this.apiUrl);
  }
  createJournal(journal: createJournalDTO) {
    return this.http.post<Journal>(this.apiUrl, journal);
  }
}
