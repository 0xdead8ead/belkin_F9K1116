#!/bin/sh

/bin/echo ">> $0 $1 $2 $3 $4" > /dev/console

idx=0

while [ ! -f "/proc/${1}_async" ] && [ $idx -lt 20 ]; do
        /bin/echo "Wait USB $1 async ($idx)" > /dev/console
        let idx=idx+1
        /bin/sleep 1
done

if [ $idx -eq 20 ]
then
    /bin/echo "async not done in 20 seconds, exit" > /dev/console
    exit 
fi

while [ -f "/tmp/keep_usb_m" ]; do
        /bin/echo "Wait USB $1" > /tmp/wait_usb_m_$1
        /bin/sleep 1
done

if [ -f /tmp/wait_usb_m_$1 ]; then
        /bin/rm /tmp/wait_usb_m_$1
fi

/bin/echo "keep" > /tmp/keep_usb_m

if [ ! -d /tmp/sd ]; then
/bin/mkdir /tmp/sd
fi

/bin/echo $2 > /tmp/sd/$1
/bin/echo $3 >> /tmp/sd/$1
/bin/echo $4 >> /tmp/sd/$1


#/usr/sbin/mknod_sd $1

/bin/sleep 2
#/usr/sbin/rc sd mount $1
/usr/bin/killall -SIGUSR1 dlna_agent
/bin/rm /tmp/keep_usb_m
