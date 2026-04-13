if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js');
      console.log('service worker registered', registration);
    } catch (error) {
      console.log('service worker not registered', error);
    }
  });
}
