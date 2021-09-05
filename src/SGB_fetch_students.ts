import md5 = require('md5');
import fetch = require('node-fetch');

const teacherId: string = 'teacher+3@gmail.com';
const urlServeurSGB: string = 'http://localhost:3001';
const endPointGroupeCoursEnseignant: string = '/api/v1/courses';

class GroupeCours {
    id: number;
    sigle: string;
    maxNbEtudiants: number;
    groupe: string;
    titre: string;
    dateDebut: string;
    dateFin: string;

    constructor(sigle: string, 
        titre: string, 
        nbMaxEtudiants: number, 
        groupe: string, 
        dateDebut: string, 
        dateFin: string,
        id: number) {
        this.id = id;
        this.sigle = sigle;
        this.maxNbEtudiants = nbMaxEtudiants;
        this.groupe = groupe;
        this.titre = titre;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }
}

function formatGroupeCours(groupeCoursReponseSGB: any): GroupeCours {
    return new GroupeCours(
        groupeCoursReponseSGB._sigle,
        groupeCoursReponseSGB._titre,
        groupeCoursReponseSGB._nb_max_student,
        groupeCoursReponseSGB._groupe,
        groupeCoursReponseSGB._date_debut,
        groupeCoursReponseSGB._date_fin,
        groupeCoursReponseSGB._id
    );
}

class ServiceGroupeCours {
     getGroupeCours = async  teacherId=> {
         console.log("getGroupCours called")
        let url =  urlServeurSGB + endPointGroupeCoursEnseignant;
        console.log("Fetching: " + url + " using header token as md5 of " + teacherId)
         const response =  await fetch(url, { headers: { token: md5(teacherId) } })
         console.log("get response from external server");
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
        console.log("**************************\nAs-tu oublié de lancer SGB?\n**************************\n\n\n\n", err)
    });