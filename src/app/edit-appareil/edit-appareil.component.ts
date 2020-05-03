import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilService} from "../services/appareil.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'eteint';

  constructor(private appareilService: AppareilService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    //Recuperer les infos du formulaire
    const name = form.value['name'];
    const status = form.value['status'];
    //Ajouter l appareil
    this.appareilService.addAppareil(name, status);
    //Rediriger vers la page
    this.router.navigate(['/appareils']);
  }

}

