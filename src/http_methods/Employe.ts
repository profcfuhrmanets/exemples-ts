export class Employe {
    private _nom:string;
    private _poste:string;
    private _tauxHoraire:number;
   
    constructor(nom:string, poste:string, tauxHoraire:number) {
        this._nom = nom;
        this.poste = poste;
        this.tauxHoraire = tauxHoraire;
    }


    // Lecture seule
    get nom(): string {
        return this._nom;
    }

    get poste(): string {
        return this._poste;
    }

    set poste(poste: string) {
        this._poste = poste;
    }

    get tauxHoraire(): number {
        return this._tauxHoraire;
    }

    set tauxHoraire(tauxHoraire: number) {
        this._tauxHoraire = tauxHoraire;
    }


    public toJSON() {
        return {
            "nom": this._nom,
            "poste": this._poste,
            "tauxHoraire": this._tauxHoraire
        }
    }
}