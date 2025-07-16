import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Exchange {
  
  private http = inject(HttpClient);
  private exchangeRateSignal = signal(90);

  getLatestRates() {
    return this.http.get('https://data.fixer.io/api/latest', {
      params: {
        access_key: '5af4036afe7240b31ecb39630768ec35',
        base: 'EUR',
        symbols: 'INR'
      }
    });
  }

  getExchangeRateSignal() {
    return this.exchangeRateSignal;
  }

  updateExchangeRate(rate: number) {
    this.exchangeRateSignal.set(rate);
  }
}
