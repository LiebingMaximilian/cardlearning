import { Component } from '@angular/core';
import { CardService } from '../card-service.service';
import { Card } from '../card';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgModel } from '@angular/forms';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule,MatFormField,MatLabel,MatFormFieldModule,MatInputModule, FormsModule, AppComponent],
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css'
})
export class CreateCardComponent {
  
  question:string = ""
  answer:string = ""
  errorMessage: string = ""


  constructor(private cardService:CardService){}

  createCard():void{
    if(this.question && this.answer)
    {
      //id and difficulty will be set in 
      let card = {id:0, question:this.question, answer:this.answer, difficulty:10}
      this.cardService.createCard(card).subscribe()

      this.answer = ""
      this.question = ""
      this.errorMessage = "Card Created"
      console.log("CardCreated")

    }
    else {
    this.errorMessage = "Invalid"
    }
  }
}
