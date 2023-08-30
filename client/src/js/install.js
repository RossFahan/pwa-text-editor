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

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
  
      // Wait for the user to respond to the prompt
      const choiceResult = await deferredPrompt.userChoice;
  
      // Check if the user accepted the prompt
      if (choiceResult.outcome === 'accepted') {
        console.log('PWA installation accepted');
      } else {
        console.log('PWA installation declined');
      }
  
      // Reset the deferredPrompt variable
      deferredPrompt = null;
  
      // Hide the install button
      butInstall.style.display = 'none';
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
