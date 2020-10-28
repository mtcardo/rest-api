export interface Notification {
    id: string;
    senderId: number;
    receiverId: number;
    text: string;
}

export class NotificationController {
    private notificationList: Notification[] = [
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

    public list(): Notification[] {
        return this.notificationList;
    }

    public get(id: string): Notification | undefined {
        return this.notificationList.find((x) => x.id === id);
    }

    public post(notification: Notification): Notification {
        this.notificationList = [...this.notificationList, notification];
        return notification;
    }

    public put(notification: Notification): Notification {
        this.notificationList = this.notificationList.filter(
            (x) => x.id !== notification.id
        );
        this.notificationList = [...this.notificationList, notification];
        return notification;
    }

    public delete(id: string): Notification[] {
        this.notificationList = this.notificationList.filter(
            (x) => x.id !== id
        );
        return this.notificationList;
    }
}
