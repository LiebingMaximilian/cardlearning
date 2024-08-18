import { Component, OnInit } from '@angular/core';
import { CardService } from '../card-service.service';
import { Card } from '../card';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [MatCardModule,MatButtonModule, NgIf],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent implements OnInit {

  currentCard:Card = {id:0, question:"", answer:"", difficulty:0}
  showFront = true
  constructor(private cardService:CardService){}


  ngOnInit(): void {
    this.nextCard(undefined)
  }
  nextCard(difficultyToSubtract: number| undefined):void{
    this.showFront = true
    if(difficultyToSubtract)
    {
      this.currentCard.difficulty -= difficultyToSubtract
      this.cardService.updateCard(this.currentCard).subscribe()
    }
    this.cardService.getCard().subscribe(card => this.currentCard = card)
  }

  toggleCard():void{
    this.showFront = !this.showFront
  }


}
