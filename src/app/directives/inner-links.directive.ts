import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[routerLink]'
})
export class InnerLinksDirective {
  @HostBinding('style.textDecoration') get text() {
    return 'none'
  }
}