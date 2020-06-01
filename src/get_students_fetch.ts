import md5 = require('md5');
import fetch = require('node-fetch');

const teacherId: string = 'teacher+3@gmail.com';
const urlServeurSGB: string = 'http://localhost:3001';
const endPointGroupeCoursEnseignant: string = '/api/v1/courses';

class GroupeCours {
    id: number;
    sigle: string;
    maxNbÉtudiants: number;
    groupe: string;
    titre: string;
    dateDébut: string;
    dateFin: string;

    constructor(sigle: string, titre: string, nbMaxÉtudiants: number, groupe: string, dateDébut: string, dateFin: string,
        id: number) {
        this.id = id;
        this.sigle = sigle;
        this.maxNbÉtudiants = nbMaxÉtudiants;
        this.groupe = groupe;
        this.titre = titre;
        this.dateDébut = dateDébut;
        this.dateFin = dateFin;
    }
}

function formatGroupeCours(groupeCoursRéponseSGB: any): GroupeCours {
    return {
        id: groupeCoursRéponseSGB.id,
        sigle: groupeCoursRéponseSGB.sigle,
        maxNbÉtudiants: groupeCoursRéponseSGB.nb_max_student,
        groupe: groupeCoursRéponseSGB.groupe,
        titre: groupeCoursRéponseSGB.titre,
        dateDébut: groupeCoursRéponseSGB.date_debut,
        dateFin: groupeCoursRéponseSGB.date_fin
    };
}

class ServiceGroupeCours {
    getGroupeCours(teacherId: string): Promise<GroupeCours[]> {
        return fetch(urlServeurSGB + endPointGroupeCoursEnseignant, { headers: { token: md5(teacherId) } })
            .then((res) => res.json())
            .then((res) => res.data.map((groupeCoursSGB: any) => formatGroupeCours(groupeCoursSGB)))
            .catch((err: any) => {
                return console.log(err);;
            });
    }
}

let apiClient = new ServiceGroupeCours();

apiClient.getGroupeCours(teacherId)
    .then((groupeCoursTableau) => {
        console.log("Cours pour " + teacherId);
        return groupeCoursTableau.map(function (gc) {
            return console.log('Cours: "' + gc.sigle + ': ' + gc.titre + '" g' + gc.groupe);
        });
    })
    .catch((err:any) => {
        console.log("As-tu oublié de lancer SGB?")
    });