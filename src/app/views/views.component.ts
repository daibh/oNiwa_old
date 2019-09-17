import { Component } from '@angular/core';

@Component({
    template: `<app-header></app-header>
    <div class="container-fluid">
        <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>`,
    styles: [`
        .container-fluid {
            min-height: calc(100vh - 13rem);
        }
    `]
})
export class ViewsComponent { }