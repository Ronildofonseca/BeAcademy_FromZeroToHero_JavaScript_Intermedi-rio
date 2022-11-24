class cadidates{
    constructor(firstName, surName, cpf){
        this.firstName = firstName;
        this.surName = surName;
        this.cpf = cpf
    }
}

class Masc extends candidates{
    constructor(firstName, surName, cpf, reservista){
        super(firstName, surName, cpf)
        this.reservista = reservista
    }
}

const candidate1 = new Masc( 'Marcelo', 'Vasques', 123456789, true)