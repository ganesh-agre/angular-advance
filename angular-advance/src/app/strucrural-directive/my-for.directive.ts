import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[myFor][myForOf]',
})
export class MyForDirective {
  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  @Input() set myForOf(items: any[]) {
    this.view.clear();
    items.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index: index,
      });
    });
  }
}
