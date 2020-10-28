import express = require("express");
const router = express.Router();
import uuid = require("uuid");
import { Request, Response, NextFunction } from "express";

let placeholderObject = [
    {
        id: "9303c8bc-7a91-44a3-ba3b-311f867655fa",
        senderId: 12345678,
        receiverId: 87654321,
        text: "Arroy!",
    },
    {
        id: "63b9cadb-9fb7-4111-9a41-235953c657b1",
        senderId: 11335577,
        receiverId: 22446688,
        text: "Your ride is on its way.",
    },
    {
        id: "46127369-2824-4f48-bbcd-4f6650790b92",
        senderId: 13579000,
        receiverId: 2468000,
        text: "Call me as soon as possible.",
    },
];

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json(placeholderObject);
    next();
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    res.json(
        placeholderObject.find(
            (notification) => notification.id === req.params.id
        )
    );
    next();
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    const newNotification = {
        id: uuid.v4(),
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        text: req.body.text,
    };
    placeholderObject.push(newNotification);
    res.json(newNotification);
    next();
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    placeholderObject = placeholderObject.filter(
        (notification) => notification.id !== req.params.id
    );
    res.json(placeholderObject);
    next();
});

router.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    const uneditedNotification = placeholderObject.find(
        (notification) => notification.id === req.params.id
    );
    if (!uneditedNotification) {
        throw new Error("Notification could not be found.");
    }
    const patchedNotification = {
        id: uneditedNotification?.id,
        senderId: req.body.senderId || uneditedNotification.senderId,
        receiverId: req.body.receiverId || uneditedNotification.receiverId,
        text: req.body.text || uneditedNotification.text,
    };
    placeholderObject = placeholderObject.filter(
        (notification) => notification.id !== req.params.id
    );
    placeholderObject.push(patchedNotification);
    res.json(patchedNotification);
    next();
});

module.exports = router;
