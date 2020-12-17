import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(array: any, str: string, start?: any, end?: any): any {
    return array.filter(item => {
      return item.title.includes(str) || item.description.includes(str);
    });
  }
}
