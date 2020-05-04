import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise(
      (resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
              resolve(date);
            }, 2000
        );
      }
  );
  appareils: any[];
  appareilSubscription: Subscription;

  //Integration du service AppareilService via la creation d'une variable dans le constructeur du component
  constructor(private appareilService: AppareilService) {
    setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
        (appareils: any[]) => {
            this.appareils = appareils;
        }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchoffAll();
  }

  onSave() {
      this.appareilService.saveAppareilstoServer();
  }

  onFetch() {
      this.appareilService.getAppareilsFromServer();
  }
}
