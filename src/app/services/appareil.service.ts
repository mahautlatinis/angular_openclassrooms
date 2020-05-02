export class AppareilService {
    appareils = [
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
    }

    switchoffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'eteint';
        }
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allume';
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'eteint';
    }
}
