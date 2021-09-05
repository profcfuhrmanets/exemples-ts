import md5 = require('md5');
import fetch = require('node-fetch');

const teacherId: string = 'teacher+3@gmail.com';
const urlServeurSGB: string = 'http://localhost:3200';
const endPointGroupeCoursEnseignant: string = '/api/v3/course/all';

class GroupeCours {
    id: string;
    titre: string;
    prealable: string;

  constructor(id: string,
    prealable: string,
    titre: string) {
        this.id = id;
        this.prealable = prealable;
        this.titre = titre;
    }
}

function formatGroupeCours(groupeCoursReponseSGB: any): GroupeCours {
  console.log("XXX create GroupeCours")
  console.log(groupeCoursReponseSGB);

    return new GroupeCours(
        groupeCoursReponseSGB.id,
        groupeCoursReponseSGB.prealable,
        groupeCoursReponseSGB.titre
    );
}

class ServiceGroupeCours {
     getGroupeCours = async  teacherId=> {
         console.log("getGroupCours called")
        let url =  urlServeurSGB + endPointGroupeCoursEnseignant;
        console.log("Fetching: " + url + " using header token as md5 of " + teacherId)
         const response =  await fetch(url, { headers: { token: md5(teacherId) } })
       console.log("get response from external server");
      //  console.log(response);
        const json = await response.json();
        console.log("Data received from SGB:");
       console.log(json.data)
        var data = json.data;
        let groupeCours: GroupeCours[] =   data.map((groupeCoursSGB: any) => formatGroupeCours(groupeCoursSGB));
    
        return groupeCours;
     }
  
}

let apiClient = new ServiceGroupeCours();

apiClient.getGroupeCours(teacherId)
    .then((groupeCoursTableau) => {
        console.log("Cours pour " + teacherId);
        return groupeCoursTableau.map((gc) => console.log('Cours: "' + gc.id + ': ' + gc.titre ));
    })
    .catch((err: any) => {
        console.log("**************************\nAs-tu oublié de lancer SGB?\n**************************\n\n\n\n", err)
    });