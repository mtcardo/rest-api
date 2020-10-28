const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const placeholderObject = [
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

router.get("/", (req, res) => res.json(placeholderObject));

router.get("/:id", (req, res) =>
    res.json(
        placeholderObject.filter(
            (notification) => notification.id === req.params.id
        )
    )
);

router.post("/", (req, res) => {
    const newNotification = {
        id: uuid.v4(),
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        text: req.body.text,
    };
    placeholderObject.push(newNotification);
    res.json(newNotification);
});

module.exports = router;
