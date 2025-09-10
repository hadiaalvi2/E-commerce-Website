export async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("Service Worker registered with scope:", registration.scope);
      return registration;
    } catch (error) {
      console.error("Service Worker registration failed:", error);
      return null;
    }
  }
  return null;
}

export async function askForNotificationPermission() {
  return await Notification.requestPermission();
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export async function subscribeUserToPush() {
  console.log("Attempting to get service worker registration...");
  const registration = await navigator.serviceWorker.ready;
  console.log("Service Worker ready:", registration);

  const vapidPublicKey = process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY;

  console.log("VAPID Public Key (client-side) raw:", process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY);
  console.log("VAPID Public Key (client-side) assigned:", vapidPublicKey);
  

  if (!vapidPublicKey) {
    console.error("VAPID Public Key not set in environment variables (client-side).");
    return null;
  }

  console.log("VAPID Public Key confirmed. Attempting to subscribe...");
  try {
    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
    };

    console.log("Subscription options:", subscribeOptions);

    const pushSubscription = await registration.pushManager.subscribe(
      subscribeOptions
    );

    console.log("Received PushSubscription (client-side):");
    console.log(JSON.stringify(pushSubscription));

    
    await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pushSubscription),
    });

    return pushSubscription;
  } catch (error) {
    console.error("Failed to subscribe the user:", error);
    return null;
  }
}
