import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoSaldo'
})
export class FormatoSaldoPipe implements PipeTransform {

  transform(value: number): string {
    if (value != null) {
      return `$ ${value.toFixed(2)}`;
    }
    return '$ 0.00';
  }
}
