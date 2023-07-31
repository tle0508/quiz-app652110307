import { Component } from '@angular/core';
import { quizData } from './data/quiz_data';
import { Choice } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  audio = new Audio()

  questions = quizData;
  currentQuestionIndex = 0;
  isEnd = false;
  score = 0;

  constructor() {
    this.audio.src = './assets/audio/bruh.mp3';
    this.newQuiz();
  }

  onClickchoice(choice: Choice) {
    console.log('User click' + choice.text);
    this.playSound();
    //เช็คถูก-----------
    if (choice.isAnswer) {
      this.score++;
    }
    //-----------------

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.questions[this.currentQuestionIndex].choices.sort((a,b)=> 0.5-Math.random())
    } else {
      this.isEnd = true;
    }

  }

  playSound() {
    this.audio.load();
    this.audio.addEventListener('canplaythrough', () => {
      this.audio.play();
    });
  }
  onClickNewClick() {
    this.newQuiz();
  }
  newQuiz() {
    this.questions.sort((a,b)=> 0.5-Math.random())
    this.isEnd = false
    this.currentQuestionIndex = 0;
    this.score=0;
  }

}
