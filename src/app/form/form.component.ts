import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  word : string = "";
  result: string = "";

  check() {
    if (this.word === "") {
      this.result = "Please enter a word.";
    } else {
      let reverseStr = this.word.split("").reverse().join("");
      if(this.word === reverseStr) {
        this.result = `${this.word} is a palindrome!`;
      }  else {
        this.result = `${this.word} is not a palindrome`;
      }
    }
     this.word = "";
    }
}


