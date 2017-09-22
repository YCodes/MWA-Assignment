import { Directive, ElementRef, Renderer, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})

export class MycolorDirective {

  public inputs: string[] = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];

  @Output()
  emittedValue = new EventEmitter();

  constructor(public el: ElementRef, public renderer: Renderer) { }

  @HostListener('click', ['$event'])
    onClick(event : MouseEvent) : void {  
      const randomIndex = Math.floor(Math.random() * this.inputs.length); 
          this.renderer.setElementStyle(this.el.nativeElement,'color',this.inputs[randomIndex]);
          this.emittedValue.emit(this.inputs[randomIndex]);
    }

}
