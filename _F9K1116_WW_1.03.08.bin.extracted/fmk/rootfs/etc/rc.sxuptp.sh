#!/bin/sh

LIBPATH=/lib/modules
PRODUCT="Belkin Router"
HOSTNAME=router

PROCDIR=/proc/sxuptp
CFG_KEY=DS_MODE

sxuptp_start() {
	echo "Starting sxuptpd"
	insmod sxuptp_wq.ko
	insmod sxuptp.ko netif=br0
	insmod sxuptp_usbmode.ko

	echo "Initializing USB port mode:"
	for n in 1 2 ; do
		PROCFILE=${PROCDIR}/usbmode_port${n}
		echo -n " port${n} = "
		cat ${PROCFILE}
	done

	insmod sxuptp_driver.ko

	echo "Starting usbjcpd"
	insmod jcp.ko product="${PRODUCT}" hostname="${HOSTNAME}"
}

sxuptp_stop() {
	rmmod jcp
	rmmod sxuptp_driver
	rmmod sxuptp_usbmode
	rmmod sxuptp
	rmmod sxuptp_wq
}

sxuptp_restart() {
	sxuptp_stop
	sxuptp_start
}

# Main #
cd "${LIBPATH}"

case "$1" in
'start')
	sxuptp_start ;;
'stop')
	sxuptp_stop ;;
'restart')
	sxuptp_restart ;;
*)
	echo "usage $0 start|stop|restart"
esac

