import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})
export class Searchpipe implements PipeTransform {
    transform (cards, value) {
        return cards.filter(card => card.name.includes(value))
    }
}