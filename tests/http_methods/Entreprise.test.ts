import {Employe} from '../../src/http_methods/Employe';
import {Entreprise} from '../../src/http_methods/Entreprise';

 let enterprise; 

describe('EnterpriseTest', () => {
  
  beforeEach(async () => {
    enterprise = new Entreprise();
    enterprise.ajouterEmploye("Yvan1", "Chargé de cours1", 11);
    enterprise.ajouterEmploye("Yvan2", "Chargé de cours2", 12);
  })
  
  it('call obtenirEmployes', () => {
    let employes = enterprise.obtenirEmployes();
    // console.log(employes);
    expect(employes).toBeInstanceOf(Array);
    expect(employes.length).toEqual(2);
  });

  it('call obtenirEmploye', () => {
    let employe = enterprise.obtenirEmploye("Yvan2");

    expect(employe.nom).toEqual("Yvan2")
    expect(employe.poste).toEqual("Chargé de cours2");
    expect(employe.tauxHoraire).toEqual(12);

    expect(enterprise.obtenirEmploye("Yvan1").nom).toEqual("Yvan1");
  });

  it('obtenirEmploye do not throw exception if employe do not exist', () => {
    let employe = enterprise.obtenirEmploye("Yvan3");
    expect(employe).toBeUndefined
  });

  it('modifie employe by name', () => {
    let employe = enterprise.modifierEmploye("Yvan1","Developpeur", 7);
    expect(employe.nom).toEqual("Yvan1");
    expect(employe.poste).toEqual("Developpeur");
    expect(employe.tauxHoraire).toEqual(7);    
  });


  it('modifie employe by name', () => {
    expect(() => { enterprise.modifierEmploye("Yvan5","Developpeur", 7);}).toThrowError("Employe do not exist");
  });

  it('delete employe by name', () => {
    enterprise.supprimerEmploye("Yvan1");
    let employes = enterprise.obtenirEmployes();
    expect(employes.length).toEqual(1);
    expect(employes[0].nom).toEqual("Yvan2");
  });
  
  // Should probably give an exception
  it('delete employe with wrong name', () => {
    enterprise.supprimerEmploye("Yvan999");
    let employes = enterprise.obtenirEmployes();
    expect(employes.length).toEqual(2);
  });

});
