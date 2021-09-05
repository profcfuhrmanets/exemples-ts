
// https://medium.com/javascript-in-plain-english/how-to-unit-test-express-middleware-typescript-jest-c6a7ad166e74
import { NextFunction, Request, Response } from 'express';
import {Employe} from '../../src/http_methods/Employe';
// entrepriseRoutes est une instance
import {entrepriseRoutes} from '../../src/http_methods/EntrepriseRouter';


describe('EnterpriseRouterTest', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(async () => {
    mockRequest = {};
    mockResponse = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
    };    
  })
  
  // ajouterEmploye?nom=Yvan1&poste=Testeur?tauxHoraire=11
  it('ajouterEmploye', () => {
    mockRequest = {
      query: {
          'nom': 'Yvan1',
          'poste': 'Testeur',
          'tauxHoraire': '11'
      }
    }
    entrepriseRoutes.ajouterEmploye(mockRequest as Request, mockResponse as Response, nextFunction);
    
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    let employe =  new Employe( "Yvan1","Testeur", 11);
    expect(mockResponse.send).toBeCalledWith({"employe": employe});
    
  });

  it('ajouterEmploye throw exception if missing parameters', () => {
    mockRequest = {
      query: {
      }
    }
    entrepriseRoutes.ajouterEmploye(mockRequest as Request, mockResponse as Response, nextFunction);
    
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toBeCalledWith({"error": "Error: Au moins un paramètre est manquant"});
  });


// employes/Yvan1
  it('obtenirEmploye', () => {
   mockRequest = {
    params: {
        'nom': 'Yvan1',
    }
  }
  entrepriseRoutes.getEntreprise().ajouterEmploye( "Yvan1","Testeur", 11);

  entrepriseRoutes.obtenirEmploye(mockRequest as Request, mockResponse as Response, nextFunction);
  
  expect(mockResponse.status).toHaveBeenCalledWith(200);
  let employe =  new Employe( "Yvan1","Testeur", 11);
  expect(mockResponse.send).toBeCalledWith({"employe": employe});
  
});
  
});
