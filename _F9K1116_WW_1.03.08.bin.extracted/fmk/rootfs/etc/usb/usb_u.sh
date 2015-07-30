#!/bin/sh

/bin/echo ">> $0 $1" > /dev/console

while [ -f "/tmp/keep_usb_u" ]; do
	/bin/echo "Wait USB $1" > /tmp/wait_usb_u_$1
	/bin/sleep 1
done

if [ -f /tmp/wait_usb_u_$1 ]; then
	/bin/rm /tmp/wait_usb_u_$1
fi

/bin/echo "keep" > /tmp/keep_usb_u
/bin/rm /tmp/sd/$1
#/usr/sbin/killall wget_gd $1
#/usr/sbin/rc down_manage stop $1
#/usr/sbin/rc sd umount $1
/usr/bin/killall -SIGUSR1 dlna_agent
/bin/rm /tmp/keep_usb_u

getdata=`cat /proc/partitions | grep sd`
echo "${getdata}" > /dev/console 
echo "${#getdata}" > /dev/console 
[ "${#getdata}" == "0" ] && echo "off" > /dev/console  && /usr/sbin/led_app off 60
