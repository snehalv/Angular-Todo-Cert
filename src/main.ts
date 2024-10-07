import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export class App {
  name = 'Angular';
}

platformBrowserDynamic().bootstrapModule(AppModule);
