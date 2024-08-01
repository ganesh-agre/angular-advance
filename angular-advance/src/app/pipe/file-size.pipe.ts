import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FileSizePipe implements PipeTransform {
  transform(size: number, extenstion: string = 'MB') {
    return size / (1024 * 1024) + ' ' + extenstion;
  }
}
