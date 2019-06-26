import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items : Array<any>, key: String): any {
    if(!items)
      return [];
    if(!key)
      return items;

    let filteredItems = items.filter((item)=>{
        return (item.country.toLowerCase().indexOf(key.toLowerCase()) !== -1 || item.segment.toLowerCase().indexOf(key.toLowerCase()) !== -1  )
    })
    return filteredItems;
  }

}
