#!/bin/bash
/usr/bin/pkill kismet_server
# warten bis Kismet seine Dateien gespeichert hat
/usr/bin/pgrep kismet
while [ $? = 0 ]
do
/bin/sleep 1
/usr/bin/pgrep kismet
done
/usr/bin/pkill gpsd
/bin/sleep 5
killall adb
ifconfig wlan1 down
iwconfig wlan1 mode master
ifconfig wlan1 up
