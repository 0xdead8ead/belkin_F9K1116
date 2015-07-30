# HTTP Download
# Pattern attributes: unknown
# Protocol groups: file
# Wiki: n/a
# Copyright (C) 2012 David Shao, Belkin International, INC.; See ../LICENSE

httpdownload
# Content-type application/octet-stream are usually downloading things that are not interactive.
#Content-Type: application/octet-stream
http/(0\.9|1\.0|1\.1)[\x09-\x0d ][1-5][0-9][0-9][\x09-\x0d -~]*(Content-Type: application/octet-stream)