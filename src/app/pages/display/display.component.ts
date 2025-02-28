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
      this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        x['type'] + '/index.html'
      );
    });
  }
}
