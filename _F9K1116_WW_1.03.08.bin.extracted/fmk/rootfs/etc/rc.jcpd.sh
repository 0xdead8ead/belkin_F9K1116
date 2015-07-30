#!/bin/sh

IFNAME=br0
JCPD=/sbin/jcpd

jcp_start() {
	echo "Starting jcpd"
	${JCPD} -i ${IFNAME}

}

jcp_stop() {
	killall jcpd
}

jcp_restart() {
	jcp_stop
	jcp_start
}

# Main #
case "$1" in
'start')
	jcp_start ;;
'stop')
	jcp_stop ;;
'restart')
	jcp_restart ;;
*)
	echo "usage $0 start|stop|restart"
esac

