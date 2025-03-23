import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  iframeUrl!: SafeResourceUrl;
  constructor(private router: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.router.queryParams.subscribe((x) => {
      this.goTo(x['type']);
    });
  }

  goTo(type: string) {
    switch (type) {
      case 'star-hopper':
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://victorbarbosa.github.io/star-hopper-web/'
        );
        break;
      case 'falcon-9':
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://html-classic.itch.zone/html/13161782/index.html'
        );
        break;
      case 'super-heavy':
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://html-classic.itch.zone/html/13161742/index.html'
        );
        break;
    }
  }
}
