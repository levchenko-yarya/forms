import {Component} from '@angular/core'

@Component({
    'selector': 'app-root',
    'template': `
        <div>
            <div>
                <button><a href="/">главная</a></button>
                <button><a href="/url-form">ссылка на форму</a></button>
                <button><a href="/builder-form">builder формы</a></button>
                <button><a href="/save-form">сохранённые формы</a></button>
            </div>
            <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent {
}
