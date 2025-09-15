import express, {
    Request,
    Response,
    json
} from "express";
import router from './routes';

function createApp() {
    const app = express();

    app.use(json());
    app.use("/", router);

    return app;
}

export default createApp;