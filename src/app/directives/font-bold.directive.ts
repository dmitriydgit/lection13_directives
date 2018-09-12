import { Directive, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'h4'
})
export class FontBoldDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight',    'bold');
    //this.highlight();
    //console.log("lorem")
  }

  // private highlight(color?: string) {
  //   this.renderer.setStyle(this.el.nativeElement, 'color', 'pink');
  // }


}