# altDevApp - the alternative DevApp for (Ionic) devs
This near-finished boilerplate allows you to run a devapp to test cordova web apps like Ionic's great framework on a 
physical device while runing a dev web server (like Ionic's `ionic serve`) and not needing to use a cable or live-reload.

Big difference with PhoneGaps's DevApp and Ionic's DevApp is that it doesn't have a fance UI and a discovery function, BUT, you will have  full control over plugins you want to try over wifi and cable-less livereload over multiple devices.

## How to use:
* `git clone https://github.com/Tommertom/altDevApp.git`
* cd altDevApp
* run `npm i`
* change `config.xml` to reflect the development machine as per outline below
* add the platform you want to use (ios/android)
* add some plugins you want to use more (other then the ones already included, see below)
* and install the build on the device (or multiple devices) using e.g. `ionic cordova run android`

Key lines to change in config.xml (besides the name of the app and author etc - no need to have my name there!)
* `<name>a_235-8100</name>` : the name under which the icon should appear on your device (I use part of IP number+ port) as I run different dev machines and apps under different ports. 
* `<content src="http://192.168.178.235:8100" />`: should refer to the IP/port adress (not localhost!) of your webserver

If need to cordova plugins you want to use, just do the  `ionic cordova plugin add` part to add it to the altDevApp boilerplate. And of course, in the app you are developing you need to both `ionic cordova plugin add` and the `npm install ` thing.

Security: this app uses cordova whitelist plugin v7 and allows you to access ANY webapp/website on the internet to be loaded in the webview container with the cordova plugins enabled. So basically extremely insecure if used improperly.

## Plugins already included
```
<plugin name="cordova-sqlite-storage" spec="^2.1.4" />
    <plugin name="cordova-plugin-device" spec="^1.1.7" />
    <plugin name="cordova-plugin-splashscreen" spec="^4.1.0" />
    <plugin name="cordova-plugin-statusbar" spec="^2.4.0" />
    <plugin name="cordova-plugin-whitelist" spec="^1.3.3" />     ---> DON'T REMOVE
    <plugin name="ionic-plugin-keyboard" spec="^2.2.1" />
    <plugin name="cordova-plugin-geolocation" spec="^2.4.3" />
    <plugin name="cordova-plugin-network-information" spec="^1.3.4" />
    <plugin name="cordova-plugin-inappbrowser" spec="^1.7.2" />
    <plugin name="cordova-plugin-x-socialsharing" spec="^5.2.1" />
    <plugin name="cordova-plugin-file" spec="^4.3.3" />
    <plugin name="cordova-plugin-badge" spec="^0.8.5" />
    <plugin name="cordova-plugin-vibration" spec="^2.1.6" />
    <plugin name="cordova-plugin-fullscreen" spec="^1.2.0" />
    <plugin name="cordova-plugin-mauron85-background-geolocation" spec="^2.3.3">
        <variable name="ICON" value="@mipmap/icon" />
        <variable name="SMALL_ICON" value="@mipmap/icon" />
        <variable name="ACCOUNT_NAME" value="@string/app_name" />
        <variable name="ACCOUNT_LABEL" value="@string/app_name" />
        <variable name="ACCOUNT_TYPE" value="$PACKAGE_NAME.account" />
        <variable name="CONTENT_AUTHORITY" value="$PACKAGE_NAME" />
        <variable name="GOOGLE_PLAY_SERVICES_VERSION" value="+" />
    </plugin>
    <plugin name="cordova-plugin-background-mode" spec="^0.7.2" />
    <plugin name="cordova-plugin-ble-central" spec="^1.1.4" />
    <plugin name="mx.ferreyra.callnumber" spec="0.0.2" />
    <plugin name="cordova-plugin-contacts" spec="^2.3.1" />
    <plugin name="cordova-plugin-device-orientation" spec="^1.0.7" />
    <plugin name="de.appplant.cordova.plugin.printer" spec="^0.7.3" />
    <plugin name="cordova-plugin-qrscanner" spec="^2.5.0" />
    <plugin name="com.darktalker.cordova.screenshot" spec="^0.1.6" />
    <plugin name="cordova-sms-plugin" spec="^0.1.11" />
    <plugin name="call-number" spec="^1.0.1" />
    <plugin name="cordova-plugin-screen-orientation" spec="^3.0.1" />
```

## Todo
Well, ideally, there would be a nice UI like Ionic's DevApp, but I am not sure if that can be done using webapp or a javaplugin. Something to figure out whenever the time is right.

Tested under Android (I don't have xcode) and Samsung Tablet.

## Copyright
Copyright: see LICENSE.md