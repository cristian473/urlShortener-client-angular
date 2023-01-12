import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  urlGenerated: string = '';
  urlsSaved: string[] = [];

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
    this.urlsSaved.push(this.urlGenerated);
    this.urlGenerated = '';
    console.log(this.urlsSaved);
  }
}
