#!/bin/bash
killall kismet_server
killall gpsd
killall adp
ifconfig wlan1 down
iwconfig wlan1 mode master
ifconfig wlan1 up
