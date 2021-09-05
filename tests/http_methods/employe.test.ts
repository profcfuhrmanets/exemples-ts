import { Employe } from '../../src/http_methods/Employe';

let employe;

describe('EmployeTest', () => {

  beforeEach(async () => {
    employe = new Employe("Yvan", "Chargé de cours", 10);
	})

  it('get nom', () => {
    expect(employe.nom).toEqual("Yvan");
  });

  it('get poste', () => {
    expect(employe.poste).toEqual("Chargé de cours");
  });

  it('set poste', () => {
    employe.poste = "test"
    expect(employe.poste).toEqual("test");
  });

  it('get tauxHoraire', () => {
    expect(employe.tauxHoraire).toEqual(10);
  });

  it('set tauxHoraire', () => {
    employe.tauxHoraire = 20
    expect(employe.tauxHoraire).toEqual(20);
  });


  it('toJson', () => {
    expect(employe.toJSON()).toEqual({"nom":"Yvan","poste":"Chargé de cours","tauxHoraire":10});
  });

});
