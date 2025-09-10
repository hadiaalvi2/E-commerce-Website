import { NextResponse } from 'next/server';
import { addSubscription } from '@/lib/subscriptions';

export async function POST(req: Request) {
  try {
    const subscription = await req.json();
    console.log('Received push subscription:', subscription);

    addSubscription(subscription);

    return NextResponse.json({ message: 'Subscription received' }, { status: 200 });
  } catch (error) {
    console.error('Error handling subscription:', error);
    return NextResponse.json({ error: 'Failed to handle subscription' }, { status: 500 });
  }
}
