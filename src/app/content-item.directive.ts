import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appContentItem]'
})
export class ContentItemDirective {

  constructor(public template: TemplateRef<any>) { }

}
