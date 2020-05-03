export class User {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public drinkPreference: string,
                //? signifie optionnel
                public hobby?: string[]) {}
}
