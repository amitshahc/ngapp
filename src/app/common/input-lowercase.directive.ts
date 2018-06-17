import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[inputLowercase]'
})

export class InputLowercaseDirective {

  @Input('format') format: string;

  constructor(private el: ElementRef) { }

  @HostListener('keyup') onChange(){    
    if(this.format == 'lowercase')
    {
      let value: string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toLowerCase();
    }
    else if(this.format == 'uppercase')
    {
      let value: string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
