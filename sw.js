self.addEventListener('install', function(event) {
    console.log('Service Worker instalado.');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activado.');
});

self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'icon.png', // Ruta a un icono para la notificación
        badge: 'badge.png' // Ruta a una insignia para la notificación
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});
