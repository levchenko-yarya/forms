import {Component} from '@angular/core'

@Component({
    'selector': 'my-app',
    'template': `<label>Введите имя</label>
    <input type="text" placeholder="name">
    <h1>добро пожаловать {{name}}</h1>`
})

export class AppComponent {
    name = ''
}