import { animateChild } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    // transform(value: string, limit?: number ){
    //         if(!value)
    //          return null;
    //         let actualLimit =(limit) ? limit:50;
    //         return  value.substr(0, actualLimit)+ '...';
    // }
    transform(value:any, searchText:string): any{
        // if(!value) return [];
        // if(!searchText) return value;
        // return value.filter((animal)=>{
            return null//animal.toLowerCase().includes(searchText);
        
   }

} 