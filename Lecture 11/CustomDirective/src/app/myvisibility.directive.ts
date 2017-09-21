import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  constructor(public el: ElementRef, public renderer: Renderer) { }
    
  @Input() appMyvisibility: boolean;

    ngOnInit(){
      if(this.appMyvisibility){
        this.renderer.setElementStyle(this.el.nativeElement, 'display','none');
    }
   }
}
