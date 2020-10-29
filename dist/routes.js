"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationController_1 = require("./controllers/NotificationController");
var setNotificationController = function (app) {
    var baseUrl = "/notification";
    var controller = new NotificationController_1.NotificationController();
    app.get(baseUrl + "/", function (req, res) {
        res.json(controller.list());
    });
    app.get(baseUrl + "/:id", function (req, res) {
        return res.json(controller.get(req.params.id));
    });
    app.post("" + baseUrl, function (req, res) {
        res.json(controller.post({
            id: req.body.id,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
            text: req.body.text,
        }));
    });
    app.put(baseUrl + "/:id", function (req, res) {
        res.json(controller.post({
            id: req.params.id,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
            text: req.body.text,
        }));
    });
    app.delete(baseUrl + "/:id", function (req, res) {
        res.json(controller.delete(req.params.id));
    });
};
var setRoutes = function (app) {
    setNotificationController(app);
};
exports.default = setRoutes;
