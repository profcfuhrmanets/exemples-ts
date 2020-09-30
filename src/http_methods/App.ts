import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { entrepriseRoutes } from './EntrepriseRouter';

class App {
    // ref to Express instance
    public expressApp: express.Application;
  
    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
    }
  
    // Configure Express middleware.
    private middleware(): void {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }
  
    // Configure API endpoints.
    private routes(): void {
        var router = express.Router();

        router.get("/", (req, res, next) => {
            res.status(200).send({
                "message": "Les routes commencent par /api/v1/ et sont définies dans EntrepriseRouter"
            });
        })

        this.expressApp.use('/', router);
        this.expressApp.use('/api/v1', entrepriseRoutes.router);
    }
}
  
export default new App().expressApp;