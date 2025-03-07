import { Component, computed, Input, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { investmentInput, InvestmentResult } from '../investment-input-model';
import { InvestmentService } from '../../investment.service';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results=input();
  // results = input<InvestmentResult[]>();
  constructor(private investmentservice: InvestmentService) {}

  // get results() {
  //   return this.investmentservice.resultData;
  // }
  results = computed(() => this.investmentservice.resultData() ?? []);
}
