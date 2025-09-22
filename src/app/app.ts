import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('redirector-app');

  constructor() {
    console.log('App component initialized');
    console.log('Current URL:', window.location.href);
    console.log('Current Path:', window.location.pathname);
    // Remove '/redirector-app' from the pathname if present
    const cleanedPath = window.location.pathname.replace(/^\/redirector-app/, '');
    const pathMatch = cleanedPath.match(/^\/([^/?]+)$/);
    const query: URLSearchParams = new URLSearchParams(window.location.search);

    if (pathMatch) {
      console.log('Protocol:', pathMatch[1]);
      console.log('Query params:', Array.from(query.entries()));
      const protocol = pathMatch[1];
      const authority = Array.from(query.keys())[0];
      const value = query.get(authority || '');

      if (protocol && authority && value) {
        const redirectUrl = `${protocol}://${authority}${value}`;
        window.location.href = redirectUrl;
      }
    }
  }
}
