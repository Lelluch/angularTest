import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit{

  @Input('appStyle') data!: string

  monthValue = 1;
  monthItem = 1;
  displayData = 0;

  constructor(private el:ElementRef,private r:Renderer2) {
    
  }
  ngOnInit(): void {   
    this.monthItem = new Date(this.data).getMonth() + 1
    this.displayData = this.monthItem - this.monthValue;
    if(this.displayData===1){
      this.r.setStyle(this.el.nativeElement,'backgroundColor', 'green')
    }
    if(this.displayData>6){
      this.r.setStyle(this.el.nativeElement,'backgroundColor', 'red')
    }
    if(this.displayData > 1 && this.displayData <= 6){
      this.r.setStyle(this.el.nativeElement,'backgroundColor', 'yellow')
    }
    if (this.displayData === 0) {
      const days = new Date(this.data).getDay()
      if(days<7){
        this.r.setStyle(this.el.nativeElement,'backgroundColor', 'blue')
      }
    }
  }
}
