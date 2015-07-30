#!/bin/sh

[ x"$1" == x"mount" ] && /bin/echo mount $2 port $3 > /dev/console && /usr/sbin/led_app on 60
[ x"$1" == x"unmount" ] && /usr/bin/wget -O /dev/console http://127.0.0.1:9000/rpc/stop && /usr/bin/killall dlna_agent && /bin/echo unmount $2 port $3> /dev/console 

