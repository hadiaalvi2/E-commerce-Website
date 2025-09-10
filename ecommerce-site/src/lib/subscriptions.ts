type PushSubscription = {
  endpoint: string;
  expirationTime: number | null;
  keys: {
    p256dh: string;
    auth: string;
  };
};

const subscriptions: PushSubscription[] = [];

export function addSubscription(subscription: PushSubscription) {

  subscriptions.push(subscription);
  console.log("Current subscriptions:", subscriptions);
}

export function getSubscriptions(): PushSubscription[] {
  return subscriptions;
}
