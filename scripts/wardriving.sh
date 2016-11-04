#!/bin/bash

echo "==> Setting wlan1 in monitor mode"
ifconfig wlan1 down
iwconfig wlan1 mode monitor
ifconfig wlan1 up

echo "==> Enabling ADB Forwarding to tcp:50000"
adb forward tcp:50000 tcp:50000

echo "==> Refreshing NTP server"
killall ntpd
ntpd > /dev/null 2>&1 &
sleep 3

echo "==> Starting GPSD with tcp://localhost:50000"
#service gpsd stop
killall gpsd
gpsd -F /var/run/gpsd.sock tcp://localhost:50000
sleep 3

echo "==> Starting Kismet server in background"
killall kismet_server
kismet_server -p /sd/kismet/ -c wlan1 --daemonize
