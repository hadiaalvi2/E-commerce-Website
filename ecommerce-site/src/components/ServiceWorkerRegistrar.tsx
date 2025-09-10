"use client";

import { useEffect } from 'react';
import { registerServiceWorker } from '@/utils/pushNotifications';

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      registerServiceWorker();
    }
  }, []);
  return null;
}
