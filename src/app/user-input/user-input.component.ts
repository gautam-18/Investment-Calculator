import { Component, EventEmitter, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentInput, InvestmentResult } from '../investment-input-model';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<investmentInput>();
  // calculate = output<investmentInput>();
  // transforsming a string to numerb +
  constructor(private investmentService: InvestmentService) {}
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnualInvestment(),
    });
  }

  enteredInitialInvestment = signal('0');
  enteredAnualInvestment = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('0');
}

// Two way bindiing basically means getting data in to the elemnt and getting data out of the element whrn the values change

// ng model support two way binding at input and text area and related elemntn
// the value u will get out of the input will always be a string
// ng model required
