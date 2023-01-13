import { Component } from '@angular/core';

type TUrlSaved = {
  short: string;
  original: string;
  label: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  urlGenerated: string = 'shorturl.at/juIST';
  urlsSaved: TUrlSaved[] = [];

  private isUrl(urlString: string) {
    const inputElement = document.createElement('input');
    inputElement.type = 'url';
    inputElement.value = urlString;

    return inputElement.checkValidity();
  }

  generateShortUrl(urlString: string) {
    if (!this.isUrl(urlString)) return alert('Invalid url');
    //request to backend
    this.urlGenerated = 'shorturl.at/juIST';
  }

  saveUrlGenerated() {
    const labelUrl = prompt('Please introduce a name for url: ');
    if (!labelUrl) return;

    const inputValue = (document.getElementById('input-url') as any).value;
    this.urlsSaved.push({
      short: this.urlGenerated,
      original: inputValue,
      label: labelUrl,
    });

    this.clear();
  }

  copyUrlGenerated() {
    navigator.clipboard.writeText(this.urlGenerated);
  }

  clear() {
    const inputUrlForm = document.getElementById('input-url-form') as any;
    inputUrlForm.reset();
    this.urlGenerated = '';
  }
}
