import express, { Request, Response } from "express";
import { NotificationController } from "./controllers/NotificationController";

const setNotificationController = (app: express.Application) => {
    const baseUrl = "/notification";
    const controller = new NotificationController();

    app.get(`${baseUrl}/`, (req: Request, res: Response) => {
        res.json(controller.list());
    });

    app.get(`${baseUrl}/:id`, (req: Request, res: Response) =>
        res.json(controller.get(req.params.id))
    );

    app.post(`${baseUrl}`, (req: Request, res: Response) => {
        res.json(
            controller.post({
                id: req.body.id,
                senderId: req.body.senderId,
                receiverId: req.body.receiverId,
                text: req.body.text,
            })
        );
    });

    app.put(`${baseUrl}/:id`, (req: Request, res: Response) => {
        res.json(
            controller.post({
                id: req.params.id,
                senderId: req.body.senderId,
                receiverId: req.body.receiverId,
                text: req.body.text,
            })
        );
    });

    app.delete(`${baseUrl}/:id`, (req: Request, res: Response) => {
        res.json(controller.delete(req.params.id));
    });
};

const setRoutes = (app: express.Application) => {
    setNotificationController(app);
};

export default setRoutes;
