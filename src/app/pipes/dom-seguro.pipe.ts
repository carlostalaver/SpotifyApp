import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer){

  }
  transform(value: string, url: string): SafeResourceUrl {
    console.log('don seguro value  ', value + url);

    return this.domSanitizer.bypassSecurityTrustResourceUrl(value + url);
  }

}
