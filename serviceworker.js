// // var staticCacheName = "pwa";

// // self.addEventListener("install", function (e) {
// // e.waitUntil(
// // 	caches.open(staticCacheName).then(function (cache) {
// // 	return cache.addAll(["/"]);
// // 	})
// // );
// // });

// // // self.addEventListener("fetch", function (event) {
// // // console.log(event.request.url);

// // // event.respondWith(
// // // 	caches.match(event.request).then(function (response) {
// // // 	return response || fetch(event.request);
// // // 	})
// // // );
// // // });


// // // self.addEventListener('install', event => {
// // //     // Perform install steps
// // //     console.log('Service worker installed');
// // // });
// // self.addEventListener("fetch", function (event) {
// // 	console.log(event.request.url);
// // 	event.respondWith(
// // 	caches.match(event.request).then(function (response) {
// // 	return response || fetch(event.request);
// // 	})
// // 	);
// // 	});
// // 	self.addEventListener('sync', event => {
// // 	if
// // 	(event.tag === 'syncMessage') {
// // 	console.log("Sync successful!")
// // 	}
// // 	});
// // 	self.addEventListener('push', function (event) {
// // 	if (event && event.data) {
// // 	var data = event.data.json();
// // 	if (data.method == "pushMessage") {
// // 	console.log("Push notification sent");
// // 	event.waitUntil(self.registration.showNotification("My watch", {
// // 	body: data.message
// // 	}))
// // 	}
// // 	}
// // self.addEventListener('install', event => {
// // 	event.waitUntil(
// // 		caches.open('offline')
// // 			.then(cache => {
// // 				return cache.addAll([
					
// //                    'index.html',
// //                    'contact.html',
// //                    'about.html',
// //                    'images/1.png',
// //                    'images/2.avif',
// // 				   'product.html'
                   
// // 				]);
// // 			})
// // 	);
// //  });
 

// // self.addEventListener('activate', event => {
// //     // Perform activate steps
// //     console.log('Service worker activated');
// // });

// var staticCacheName = "pwa";

// self.addEventListener("install", function (e) {
//     e.waitUntil(
//         caches.open(staticCacheName).then(function (cache) {
//             return cache.addAll(["/"]);
//         })
//     );
// });

// self.addEventListener("fetch", function (event) {
//     console.log(event.request.url);
//     event.respondWith(
//         caches.match(event.request).then(function (response) {
//             return response || fetch(event.request);
//         })
//     );
// });

// self.addEventListener('sync', event => {
//     if (event.tag === 'syncMessage') {
//         console.log("Sync successful!");
//     }
// });

// self.addEventListener('push', function (event) {
//     if (event && event.data) {
//         var data = event.data.json();
//         if (data.method == "pushMessage") {
//             console.log("Push notification sent");
//             event.waitUntil(self.registration.showNotification("My watch", {
//                 body: data.message
//             }));
//         }
//     }
// });
// var checkResponse = function (request) {
// 	return new Promise(function (fulfill, reject) {
// 	fetch(request).then(function (response) {
// 	if (response.status !== 404) {
// 	fulfill(response);
// 	} else {
// 	reject();
// 	}
// 	}, reject);
// 	});
// 	};
	

// // self.addEventListener('install', event => {
// //     event.waitUntil(
// //         caches.open('offline').then(cache => {
// //             return cache.addAll([
// //                 'index.html',
// //                 'contact.html',
// //                 'about.html',
// //                 'images/1.png',
// //                 'images/2.avif',
// //                 'product.html'
// //             ]);
// //         })
// //     );
// // });

// self.addEventListener('activate', event => {
//     // Perform activate steps
//     console.log('Service worker activated');
// });
// // Request notification permission when service worker is installed
// self.addEventListener('install', event => {
//     event.waitUntil(
//         Notification.requestPermission().then(permission => {
//             if (permission === 'granted') {
//                 console.log('Notification permission granted.');
//             } else {
//                 console.log('Notification permission denied.');
//             }
//         })
//     );
// });

var staticCacheName = "pwa";

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(["/"]);
        })
    );
});

self.addEventListener("fetch", function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('sync', event => {
    if (event.tag === 'syncMessage') {
        console.log("Sync successful!");
    }
});

self.addEventListener('push', function (event) {
    if (event && event.data) {
        var data = event.data.json();
        if (data.method == "pushMessage") {
            console.log("Push notification sent");
            // Check if permission is granted before showing notification
            if (event.source && event.source.postMessage) {
                event.source.postMessage({ permission: Notification.permission });
            }
            event.waitUntil(
                self.registration.showNotification("My watch", {
                    body: data.message
                })
            );
        }
    }
});


self.addEventListener('activate', event => {
    // Perform activate steps
    console.log('Service worker activated');
});

// Request notification permission when service worker is installed
self.addEventListener('install', event => {
    event.waitUntil(
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
            } else {
                console.log('Notification permission denied.');
            }
        })
    );
});
