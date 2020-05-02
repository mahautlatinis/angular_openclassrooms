import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus () {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allume'){
      return 'green';
    } else if (this.appareilStatus === 'eteint') {
      return'red';
    }
  }
  OnSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  OnSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
