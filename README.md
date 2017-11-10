# altDevApp - the alternative DevApp for Ionic devs
This near-finished boilerplate allows you to run an alternative to DevApp from Ionic, through
which you can test cordova plugins using `ionic serve -w chrome` only.

It supports livereload done by ionic serve, and listening to console.log writes using chrome inspection tools.

VERY EXPERIMENTAL

How to use:

```
git clone https://github.com/Tommertom/altDevApp.git
cd altDevApp
```

add the cordova plugins you want to use. For this you only need to do the `ionic cordova plugin add` part (not `npm`).
(Currently has Vibration as plugin included only)


add the platform you want to use: `ionic cordova platform add android`

then `ionic cordova prepare`

and then run on your device. Like I did: `ionic cordova run android`

Security: this app uses cordova whitelist v7 and allows you to access ANY webapp/website on the internet to be loaded
in the webview container with the cordova plugins enabled. So basically extremely insecure if used improperly.

Copyright: see LICENSE.md