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

  // it('create course by Id', () => {
  //   let course =  Course.fromId(1);
  //   expect(course.id()).to.equal(1);
  //   expect(course.sigle()).to.equal("LOG210");
  //   expect(course.nb_max_student()).to.equal(5);
  //   expect(course.groupe()).to.equal("01");
  //   expect(course.titre()).to.equal("Analyse et conception de logiciels");
  //   expect(course.date_debut()).to.equal("2019-09-01");
  //   expect(course.date_fin()).to.equal("2019-09-02");
  // });
  // 
  // it('get course students',() => {
  //   let course =  Course.fromId(1);
  //   expect(course.students().length).to.equal(2);
  // });
  
  // it('get course from sigle',() => {
  //   // throw new Error("allo");
  //   let courses: Course[] =  Course.fromSigle("LOG210");
  //    expect(courses.length).to.equal(4);
  //    let course_id_array: number[] = courses.map(c  => c.id());
  //    expect(course_id_array.sort()).to.deep.equal([1,2,3,4].sort())
  // })

});
