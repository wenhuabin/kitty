"use strict";
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
var precacheConfig = [
  ["css/17.a52eae3afbf839fd67b4.css", "32457d92c074124038ad6e869aaaf940"],
  ["favicon.ico", "caf2366113c4edb2ba542cb8d5285a88"],
  ["imgs/launch.fd5c2213.jpg", "fd5c22130ec84c63b50b42570a1fb5ef"],
  ["imgs/logo.7c0592ae.jpg", "7c0592aeac1d10288a93cedbb7079c60"],
  ["js/0.efe625b8.js", "9c6a3f4efe810d828089248764f47cae"],
  ["js/1.3a65fe9a.js", "cc15164a53f3577c9cd78855da95354c"],
  ["js/10.3a0f0f10.js", "24259445a348e72319f16a4aea7c420e"],
  ["js/11.2ffa8f4f.js", "b93824464b70adc266da90871bf8d567"],
  ["js/12.d54b84d8.js", "4d15358dd8e7fda53ca33172d2fe043d"],
  ["js/13.92d5cfc7.js", "b093d45d5502a721b65b3ff4cf99e760"],
  ["js/14.1ca28639.js", "a2004d6b341b26cbfe1be2d21e24625b"],
  ["js/15.372b8f6e.js", "465fabcf4cc4b84c7cad1adbbba166df"],
  ["js/16.be9e6496.js", "ab63e0777a420716831a82b46281475d"],
  ["js/2.ff00467d.js", "d7fb88540a2484d361384699e95a2f11"],
  ["js/3.c161ec7a.js", "b785ed0bad6453dc0b06e46ef7fae0ae"],
  ["js/4.64f77d76.js", "9d3cc4a931ae52b5568689e8c597db22"],
  ["js/5.735a1043.js", "f4cf3e7a4ea9d2f81d9cbbf23adecc6b"],
  ["js/6.0c81502a.js", "f02d5aa81072860c00daad1ebe4096df"],
  ["js/7.3d5660db.js", "e2d6a7e6a10c627b29908e4502278a50"],
  ["js/8.ac1b1e90.js", "8e202a4cc6c769f5c4a9e122645e4942"],
  ["js/9.b46ccaf2.js", "32186c888b4fe1343e14f70eea14cdba"],
  ["js/app.a52eae3a.js", "5b45d54e0c1d09ee690baa425664ac96"],
  ["vue.html", "051e6fa492346edfd27567ca5e9b9856"]
],
  cacheName =
    "sw-precache-v3-merlin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, a) {
    var n = new URL(e);
    return "/" === n.pathname.slice(-1) && (n.pathname += a), n.toString();
  },
  cleanResponse = function(e) {
    return e.redirected
      ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(a) {
          return new Response(a, {
            headers: e.headers,
            status: e.status,
            statusText: e.statusText
          });
        })
      : Promise.resolve(e);
  },
  createCacheKey = function(e, a, n, t) {
    var r = new URL(e);
    return (t && r.pathname.match(t)) ||
      (r.search +=
        (r.search ? "&" : "") +
        encodeURIComponent(a) +
        "=" +
        encodeURIComponent(n)), r.toString();
  },
  isPathWhitelisted = function(e, a) {
    if (0 === e.length) return !0;
    var n = new URL(a).pathname;
    return e.some(function(e) {
      return n.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, a) {
    var n = new URL(e);
    return (n.hash = ""), (n.search = n.search
      .slice(1)
      .split("&")
      .map(function(e) {
        return e.split("=");
      })
      .filter(function(e) {
        return a.every(function(a) {
          return !a.test(e[0]);
        });
      })
      .map(function(e) {
        return e.join("=");
      })
      .join("&")), n.toString();
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var a = e[0],
        n = e[1],
        t = new URL(a, self.location),
        r = createCacheKey(t, hashParamName, n, !1);
      return [t.toString(), r];
    })
  );
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(e) {
        return setOfCachedUrls(e).then(function(a) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(n) {
              if (!a.has(n)) {
                var t = new Request(n, { credentials: "same-origin" });
                return fetch(t).then(function(a) {
                  if (!a.ok)
                    throw new Error(
                      "Request for " +
                        n +
                        " returned a response with status " +
                        a.status
                    );
                  return cleanResponse(a).then(function(a) {
                    return e.put(n, a);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}), self.addEventListener("activate", function(e) {
  var a = new Set(urlsToCacheKeys.values());
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(e) {
        return e.keys().then(function(n) {
          return Promise.all(
            n.map(function(n) {
              if (!a.has(n.url)) return e.delete(n);
            })
          );
        });
      })
      .then(function() {
        return self.clients.claim();
      })
  );
}), self.addEventListener("fetch", function(e) {
  if ("GET" === e.request.method) {
    var a,
      n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching);
    (a = urlsToCacheKeys.has(n)) ||
      ((n = addDirectoryIndex(n, "index.html")), (a = urlsToCacheKeys.has(n)));
    a &&
      e.respondWith(
        caches
          .open(cacheName)
          .then(function(e) {
            return e.match(urlsToCacheKeys.get(n)).then(function(e) {
              if (e) return e;
              throw Error("The cached response that was expected is missing.");
            });
          })
          .catch(function(a) {
            return console.warn(
              'Couldn\'t serve response for "%s" from cache: %O',
              e.request.url,
              a
            ), fetch(e.request);
          })
      );
  }
});

