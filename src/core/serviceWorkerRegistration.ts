export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      registerValidSW(swUrl);
    });
  }
}

async function registerValidSW(swUrl: string) {
  try {
    const registration = await navigator.serviceWorker.register(swUrl);
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (!installingWorker) return;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
          document.dispatchEvent(new Event('swUpdated'));
        }
      };
    };
  } catch (error) {
    console.error('Error during service worker registration:', error);
  }
}

export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
