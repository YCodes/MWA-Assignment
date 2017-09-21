import { Directive, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  // @HostBinding("class") className = "upper";


  constructor(el: ElementRef, renderer: Renderer) {
    // Use renderer to render the element with styles
      renderer.setElementStyle(el.nativeElement, 'text-transform', 'uppercase');
   }

}
