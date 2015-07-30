# Belkin NetCam F7D7601/F7D7602 version 1 with Seedonk
# Pattern attributes: unknown
# Protocol groups: proprietary steaming_video
# Wiki: n/a
# Copyright (C) 2012 David Shao, Belkin International, INC.; See ../LICENSE

belkinnetcamin
# When receiving the stream from the cloud server, the app initiates by this packet
# 41:03:54:00:10:00:00:00:00:00:00:79:00:fc:01:00:00:2a:2a:1e:3e:da:23:75:00:00:00:df:39....
# 41:03:3d:00:10:00:00:00:00:00:00:7a:00:fc:01:00:00:2a:2a:0d:d7:0f:24:75:00:00:00:df:39:...
# 41:03:3d:00:10:00:00:00:00:00:00:7a:00:fc:01:00:00:2a:2a:0d:d7:0f:24:75:00:00:00:df:39:...
^\x41\x03.\x10.\xfc\x01