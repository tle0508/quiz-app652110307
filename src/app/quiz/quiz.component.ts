import { Component, inject } from '@angular/core';
import { Choice, Question } from '../question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  audio = new Audio()
  quizService : QuizService =inject(QuizService);
  questions :Question[];
  currentQuestionIndex = 0;
  isEnd = false;
  score = 0;
choice: any;
selectedChoiceId: any;
correctAnswerText: string = '';
showQuestionList = false;
question: any;

  constructor() {
    this.questions =this.quizService.getQuizDataNoImage();
    this.audio.src = '../assets/audio/bruh.mp3';
    this.newQuiz();
  }

  // onClickchoice(choice: Choice) {
  //   console.log('User click' + choice.text);
  //   this.playSound();
  //   //เช็คถูก-----------
  //   if (choice.isAnswer) {
  //     this.score++;
  //   }
  //   //-----------------

  //   if (this.currentQuestionIndex < this.questions.length - 1) {
  //     this.currentQuestionIndex++;
  //     this.questions[this.currentQuestionIndex].choices.sort((a,b)=> 0.5-Math.random())
  //   } else {
  //     this.isEnd = true;
  //   }
    
  // }

  toggleQuestionList() {
    this.showQuestionList = !this.showQuestionList;
  }


  // playSound() {
  //   this.audio.load();
  //   this.audio.addEventListener('canplaythrough', () => {
  //     this.audio.play();
  //   });
  // }
  
  onClickNewClick() {
    this.newQuiz();
  }
  newQuiz() {
    this.questions.sort((a,b)=> 0.5-Math.random())
    this.isEnd = false
    this.currentQuestionIndex = 0;
    this.score=0;
  }

  goToPreviousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.correctAnswerText = ''; 
    }else{
      this.isEnd
    }
  }

  // Function to go to the next question
  goToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.correctAnswerText = ''; 
    } else {
      this.isEnd = true;
    }
  }
  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }
}
