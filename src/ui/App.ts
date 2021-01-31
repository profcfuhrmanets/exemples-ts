import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as path from 'path'

class App {
    // ref to Express instance
    public expressApp: express.Application;
  
    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.expressApp.set("view engine", "pug");
        this.expressApp.set('views', path.join(__dirname, "/views"));
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

        // Définir les routes pour les interfaces.
        // Lorsqu'il y en a plusieurs, il faut qu'elles soient dans un routeur
        router.get("/", (req, res, next) => {
            res.render("index")
        });

        router.get("/page2", (req, res, next) => {
            res.render("page2")
        });

        this.expressApp.use('/', router);
    }
}
  
export default new App().expressApp;