import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, l: number = 20): string {
    if (!value) return '';
    return value.length > l ? value.substring(0, l) + ' ...' : value;
  }

}
