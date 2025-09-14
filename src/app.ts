import express, {
    Request,
    Response,
    json
} from "express";

function createApp() {
    const app = express();

    app.use(json());

    app.get("/", (
        req: Request,
        res: Response
    ) => {
        res.send("Hello World!");
    });

    return app;
}

export default createApp;