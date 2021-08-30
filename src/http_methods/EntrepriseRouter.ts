import { Router, Request, Response, NextFunction } from 'express';
import { Entreprise } from './Entreprise';

export class EntrepriseRouter {
    public router: Router;
    private entreprise: Entreprise

    /**
     * Initialize the Router
     */
    constructor() {
        this.router = Router();
        this.entreprise = new Entreprise();
        this.init();
    }

    public getEntreprise(): Entreprise {
        return this.entreprise;
    }

    public obtenirEmployes(req: Request, res: Response, next: NextFunction) {
        try {
            var employes = this.entreprise.obtenirEmployes();

            res.status(200)
            res.send({ "employes": employes });
        }
        catch (error) {
            res.status(500)
            res.send({ "error": error.toString() });
        }
    }

    public obtenirEmploye(req: Request, res: Response, next: NextFunction) {
        // Dans GET, les paramètres existent toujours, sous forme de chaînes
        // de caractères. Il faut faire la conversion, si nécessaire
        try {
            var nom = req.params.nom;
            var employe = this.entreprise.obtenirEmploye(nom);

            res.status(200)
            res.send({ "employe": employe });
        }
        catch (error) {
            res.status(500)
            res.send({ "error": error.toString() });
        }
    }

    public ajouterEmploye(req: Request, res: Response, next: NextFunction) {
        // Dans POST, il n'est pas garanti que les paramètres vont exister.
        // Il faut faire la vérification et la conversion, si nécessaire
        try {
            var nom = req.query.nom as string;
            var poste = req.query.poste as string;
            var tauxHoraire = req.query.tauxHoraire as string;

            if (nom === undefined || poste === undefined || tauxHoraire === undefined) {
                throw new Error("Au moins un paramètre est manquant");
            }

            let tauxHoraireNumber = parseFloat(tauxHoraire);

            var employe = this.entreprise.ajouterEmploye(nom, poste, tauxHoraireNumber);

            res.status(200)
            res.send({ "employe": employe });
        }
        catch (error) {
            res.status(500)
            res.send({ "error": error.toString() });
        }
    }

    public modifierEmploye(req: Request, res: Response, next: NextFunction) {
        // Dans PATCH et PUT, il n'est pas garanti que les paramètres vont exister.
        // Il faut faire la vérification et la conversion, si nécessaire
        // PATCH : Remplacer une partie de la ressource (tous les paramètres n'ont pas besoin d'être présents)
        // PUT : Remplacer entièrement la ressource (tous les paramètres doivent être présents)
        // Ici, la méthode supporte les deux méthodes à la fois (dans votre projet, vous n'avez qu'à en supporter une)
        try {
            var nom = req.query.nom as string;
            var poste = req.query.poste as string;
            var tauxHoraire = req.query.tauxHoraire;
            var tauxHoraireNumber;

            if (nom === undefined) {
                throw new Error("Le paramètre nom est manquant");
            }

            if (tauxHoraire !== undefined) {
                tauxHoraireNumber = parseFloat(tauxHoraire as string);
            }
            var employe = this.entreprise.modifierEmploye(nom, poste, tauxHoraireNumber);

            res.status(200)
            res.send({ "employe": employe });
        }
        catch (error) {
            res.status(500)
            res.send({ "error": error.toString() });
        }
    }

    public supprimerEmploye(req: Request, res: Response, next: NextFunction) {
        // Dans DELETE, il n'est pas garanti que les paramètres vont exister.
        // Il faut faire la vérification et la conversion, si nécessaire
        try {
            var nom = req.query.nom as string;

            if (nom === undefined) {
                throw new Error("Le paramètre nom est manquant");
            }

            this.entreprise.supprimerEmploye(nom);

            res.status(200).send({ "message": "Succès" });
        }
        catch (error) {
            res.status(500)
            res.send({ "error": error.toString() });
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's endpoints.
     */
    init() {
        // Retourner tous les employés
        this.router.get("/employes", this.obtenirEmployes.bind(this));
        // Retourner un employé
        this.router.get("/employes/:nom", this.obtenirEmploye.bind(this));
        // Ajouter un employé
        this.router.post("/employes", this.ajouterEmploye.bind(this));
        // Modifier un employé
        this.router.put("/employes", this.modifierEmploye.bind(this));
        this.router.patch("/employes", this.modifierEmploye.bind(this));
        // Supprimer un employé
        this.router.delete("/employes/:nom", this.supprimerEmploye.bind(this));
    }
}

export const entrepriseRoutes = new EntrepriseRouter();
entrepriseRoutes.init();
