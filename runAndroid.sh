#!/bin/bash


cd android

device=emulator-5554
apk=$(find . -name "*.apk")
package=com.udemyspencer/.MainActivity
#com.udemyspencer/com.udemyspencer.MainActivity

./gradlew assembleDebug
adb -s $device install -r $apk
adb -s $device shell am start -n $package


