#!/bin/sh
sleep 2
echo "/usr/sbin/rc wan start" > /tmp/relive_l2tp
/usr/bin/killall -SIGINT cmd_agent


