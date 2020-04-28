import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  constructor() { }

  ngOnInit(): void {
  }

  getStatus () {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé'){
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return'red';
    }
  }

}
