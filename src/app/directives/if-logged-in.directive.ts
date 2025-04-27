import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfLoggedIn]'
})
export class IfLoggedInDirective {
  @Input() set appIfLoggedIn(isLoggedIn: boolean){
    if (isLoggedIn){
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
