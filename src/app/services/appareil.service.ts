import {Subject} from 'rxjs/Subject';
import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AppareilService {

    appareilSubject = new Subject();

    private appareils = [];

    constructor(private httpClient: HttpClient) {}

    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        return appareil;
    }

    switchOnAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'allume';
        }
        this.emitAppareilSubject();
    }

    switchoffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'eteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allume';
        this.emitAppareilSubject();
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'eteint';
        this.emitAppareilSubject();
    }

    addAppareil(name: string, status: string) {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
    //A la fin de l'url on ajoute le path via lequel on veut enregistrer les appareils
    saveAppareilstoServer() {
        this.httpClient
            .put('https://angularoc-cf1b6.firebaseio.com/appareils.json', this.appareils)
            .subscribe(
                //Pour reagir a la réponse du serveur
                () => {
                  console.log('enregistrement termine');
                }, (error) => {
                    console.log('Erreur de sauvegarde' + error);
                }
            );
    }

    getAppareilsFromServer() {
        this.httpClient
            .get<any[]>('https://angularoc-cf1b6.firebaseio.com/appareils.json')
            .subscribe(
                (response) => {
                    this.appareils = response;
                    this.emitAppareilSubject();
                },
                (error) => {
                    console.log('Erreur de chargement' + error);
                }
            );
    }
}

