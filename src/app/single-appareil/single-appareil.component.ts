import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  //On declare une string et on lui donne une valeur par defaut
  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // Le + sert a caster la chaine de caractere en chiffre
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
  }

}
