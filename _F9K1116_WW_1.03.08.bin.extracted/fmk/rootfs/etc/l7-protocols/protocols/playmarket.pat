# Play marketplace app download
# Pattern attributes: unknown
# Protocol groups: file
# Wiki: n/a
# Copyright (C) 2012 David Shao, Belkin International, INC.; See ../LICENSE

playmarket
# The stream will send a HTTP "GET /market/GetBinary/"
#\x47\x45\x54\x20\x2f\x6d\x61\x72\x6b\x65\x74\x2f\x47\x65\x74\x42\x69\x6e\x61\x72\x79\x2f
#GET /market/GetBinary/
#changed to below.  This will be more specific and less likely to change
http/(0\.9|1\.0|1\.1)[\x09-\x0d ][1-5][0-9][0-9][\x09-\x0d -~]*(Content-Type: application/vnd.android)