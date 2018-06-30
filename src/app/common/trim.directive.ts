import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor(private el?: ElementRef) { }

  @HostListener('change') onChange(){    
    
      let value: string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.trim();    
  }

}
