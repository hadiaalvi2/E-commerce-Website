import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { getSubscriptions } from '@/lib/subscriptions';

const vapidKeys = {
  publicKey: process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY as string,
  privateKey: process.env.VAPID_PRIVATE_KEY as string,
};

webpush.setVapidDetails(
  'mailto:hadiaalvi18@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

export async function POST(req: Request) {
  try {
    const { title, message, url = '/', icon, image, badge } = await req.json();

    const subscriptions = getSubscriptions();

   
    const pushPromises = subscriptions.map((subscription) =>
      webpush.sendNotification(
        subscription as webpush.PushSubscription,
        JSON.stringify({ title, message, url, icon, image, badge })
      ).catch((error) => {
        console.error('Error sending push notification:', error);
       
        return null; 
      })
    );

    const results = await Promise.all(pushPromises);
    console.log('Push notification results:', results);

    return NextResponse.json({ message: 'Push notifications sent' }, { status: 200 });
  } catch (error) {
    console.error('Error sending push notifications:', error);
    return NextResponse.json({ error: 'Failed to send push notifications' }, { status: 500 });
  }
}
