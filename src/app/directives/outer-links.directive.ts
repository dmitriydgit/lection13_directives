import { Directive, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[href]'
})
export class OuterLinksDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.highlight();
    //console.log("lorem")
  }

  private highlight(color?: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'pink');
  }


}