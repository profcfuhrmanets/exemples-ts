import { Employe } from "./Employe";

export class Entreprise {
    private _employes: Map<string, Employe>;

    constructor() {
        this._employes = new Map<string, Employe>();
    }

    public obtenirEmployes() {
        return Array.from(this._employes.values());
    }

    public obtenirEmploye(nom: string) {
        return this._employes.get(nom);
    }

    public ajouterEmploye(nom: string, poste: string, tauxHoraire: number) {
        var employe = new Employe(nom, poste, tauxHoraire);

        this._employes.set(nom, employe);

        return employe;
    }

    public modifierEmploye(nom: string, poste: string, tauxHoraire: number) {
        var employe = this._employes.get(nom);

        if (employe == undefined) {
            throw new Error("Employe do not exist");
        }

        if (poste !== undefined) {
            employe.poste = poste;
        }

        if (tauxHoraire !== undefined) {
            employe.tauxHoraire = tauxHoraire;
        }

        return employe;
    }

    public supprimerEmploye(nom: string) {
        this._employes.delete(nom);
    }
}