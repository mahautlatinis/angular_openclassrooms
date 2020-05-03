import {Subject} from 'rxjs/Subject';

export class AppareilService {

    appareilSubject = new Subject();

    private appareils = [
        {
            id: 1,
            name: 'Machine a laver',
            status: 'allume'
        },
        {
            id: 2,
            name: 'Television',
            status: 'allume'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'eteint'
        }
    ];

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
}
