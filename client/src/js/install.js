const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior, which is to automatically show the browser's install prompt
  event.preventDefault();

  // Store the event object for later use
  deferredPrompt = event;

  // Display the install button
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
