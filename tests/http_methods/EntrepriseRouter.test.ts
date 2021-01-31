// // import * as chai from 'chai';
// // import chaiHttp = require('chai-http');
// // import { exception } from 'console';

// // import app from '../src/App';
// // import { Course } from '../src/core/Course';
// // import * as md5 from 'md5';
// // import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';
// // import md5 = require('md5');

// // chai.use(chaiHttp);
// // const expect = chai.expect;
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



  
});
