import { Component } from '@angular/core'
import { Question } from '../question'
import { QUESTIONS } from '../mockup-questions'

@Component({
  selector: 'app-auth-home-sixth-card',
  templateUrl: './auth-home-sixth-card.component.html',
  styleUrls: ['auth-home-sixth-card.component.scss'],
})
export class AuthHomeSixthCardComponent {
  email: string = ''

  Questions: Question[] = QUESTIONS

  isDisplay = [true]

  setDisplay(id: number) {
    this.Questions.forEach((el) => {
      if (el.id === id) {
        this.isDisplay[id] = !this.isDisplay[id]
      }
      if (el.id !== id) {
        this.isDisplay[el.id] = false
      }
    })
  }
}
