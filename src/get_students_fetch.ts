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

    constructor(sigle: string, 
        titre: string, 
        nbMaxÉtudiants: number, 
        groupe: string, 
        dateDébut: string, 
        dateFin: string,
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
    return new GroupeCours(
        groupeCoursRéponseSGB._sigle,
        groupeCoursRéponseSGB._titre,
        groupeCoursRéponseSGB._nb_max_student,
        groupeCoursRéponseSGB._groupe,
        groupeCoursRéponseSGB._date_debut,
        groupeCoursRéponseSGB._date_fin,
        groupeCoursRéponseSGB._id
    );
}

class ServiceGroupeCours {
     getGroupeCours = async teacherId => {
        const response =  await fetch(urlServeurSGB + endPointGroupeCoursEnseignant, { headers: { token: md5(teacherId) } })
        const json = await response.json();
        console.log("Data received from SGB:");
        console.log(json);
        var data = JSON.parse(json.data);

        let groupeCours: GroupeCours[] =   data.map((groupeCoursSGB: any) => formatGroupeCours(groupeCoursSGB));
    
        return groupeCours;
     }
  
}

let apiClient = new ServiceGroupeCours();

apiClient.getGroupeCours(teacherId)
    .then((groupeCoursTableau) => {
        console.log("Cours pour " + teacherId);
        return groupeCoursTableau.map((gc) => console.log('Cours: "' + gc.sigle + ': ' + gc.titre + '" g' + gc.groupe));
    })
    .catch((err: any) => {
        console.log("As-tu oublié de lancer SGB?", err)
    });