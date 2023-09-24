import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryColor'
})
export class CategoryColorPipe implements PipeTransform {

  transform(category: string): string {
    const categoryColors: { [key: string]: string } = {
      technology: '#1324a8',
      travel: '#943600',
      culinary: '#d1a402',
      health: '#2bab3c',
      science: '#3b99d9',
      fashion: '#b11fcf',
      sports: '#bd6624'
    }
    const defaultColor = '#595959'
    const color = categoryColors[category]
    return color || defaultColor
  }

}
