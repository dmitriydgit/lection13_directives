import { Directive, HostBinding, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
	selector: 'img'
})
export class SpinnerDirective {
	link: string;
	spinner: string = 'https://cdn-images-1.medium.com/max/800/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
	cdcsd

	constructor(
		private el: ElementRef,
		private renderer: Renderer2
	) {
	}

	ngAfterViewInit() {
		this.link = this.el.nativeElement.getAttribute('src');
		console.log(this.link);
		this.el.nativeElement.setAttribute('src', this.spinner);

		let newImg = this.renderer.createElement('img');
		newImg.setAttribute('src', this.link);
		console.log(newImg)

		this.renderer.listen(this.el.nativeElement, 'load', (evt) => {
			//console.log('Clicking the document', evt);
			let parent = this.el.nativeElement.parentNode;
			let refChild = this.el.nativeElement;

			//console.log(parent)

			this.renderer.insertBefore(parent, newImg, refChild);
			this.renderer.removeChild(parent, refChild);
		})
	}
}