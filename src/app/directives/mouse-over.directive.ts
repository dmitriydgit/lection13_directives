import { Directive, HostBinding, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'mat-card'
})
export class MouseOverDirective {
  @Input('colorLeave') colorLeave: string;
  @Input('colorEnter') colorEnter: string;


  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
//console.log(this.colorEnter);
    this.highlight(this.colorEnter);
  }

  @HostListener('mouseleave') onMouseLeave() {
    //console.log(this.colorLeave)
    this.highlight(this.colorLeave);
  }



  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {

  }

  private highlight(color?: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }



}