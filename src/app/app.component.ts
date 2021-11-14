import {Component} from '@angular/core'

@Component({
    'selector': 'app-root',
    'template': `
        <div>
            <div>
                <button><a href="/">главная</a></button>
                <button><a href="/url-form">ссылка на форму</a></button>
                <button><a href="/builder-form">builder формы</a></button>
            </div>
            <h3>маршрутизация</h3>
            <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent {
}
