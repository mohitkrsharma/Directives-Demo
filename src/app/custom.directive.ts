import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customStyle]',
})
export class CustomDirective {
  constructor(public elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.color = 'pink';
  }
}
