import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(arr: any, showMobile: boolean, showTablet: boolean, showCover:boolean, showGlass:boolean): any {
    let items = [];
    if(showMobile) items = [...items, ...arr.filter(x => x.type === 'Мобільний телефон')]
    if(showTablet) items = [...items, ...arr.filter(x => x.type === 'Планшет')]
    if(showCover) items = [...items, ...arr.filter(x => x.type === 'Чохол')]
    if(showGlass) items = [...items, ...arr.filter(x => x.type === 'Захисне скло')]
    return items;
  }

}
