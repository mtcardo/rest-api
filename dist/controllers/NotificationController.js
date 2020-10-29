"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
var NotificationController = /** @class */ (function () {
    function NotificationController() {
        this.notificationList = [
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
    }
    NotificationController.prototype.list = function () {
        return this.notificationList;
    };
    NotificationController.prototype.get = function (id) {
        return this.notificationList.find(function (x) { return x.id === id; });
    };
    NotificationController.prototype.post = function (notification) {
        this.notificationList = __spreadArrays(this.notificationList, [notification]);
        return notification;
    };
    NotificationController.prototype.put = function (notification) {
        this.notificationList = this.notificationList.filter(function (x) { return x.id !== notification.id; });
        this.notificationList = __spreadArrays(this.notificationList, [notification]);
        return notification;
    };
    NotificationController.prototype.delete = function (id) {
        this.notificationList = this.notificationList.filter(function (x) { return x.id !== id; });
        return this.notificationList;
    };
    return NotificationController;
}());
exports.NotificationController = NotificationController;
