import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[toTitleCase]'
})
export class TitleCaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup') onchange() {

    let tword = [];
    let value: string = this.el.nativeElement.value;
    let words = value.split(' ');

    for (let i = 0; i < words.length; i++) {
      tword[i] = this.getTitleCased(words[i]);
    }

    this.el.nativeElement.value = tword.join(' ');
  }

  private getTitleCased(word: string) {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
