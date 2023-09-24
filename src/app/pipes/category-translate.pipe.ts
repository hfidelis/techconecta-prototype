import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryTranslate'
})
export class CategoryTranslatePipe implements PipeTransform {

  transform(category: string): string {
    const translatedCategories: { [key: string]: string } = {
      technology: 'Tecnologia',
      travel: 'Viagem',
      culinary: 'Culinária',
      health: 'Saúde',
      science: 'Ciência',
      fashion: 'Moda',
      sports: 'Esportes'
    }
    const value = translatedCategories[category]
    return value || category
  }

}
