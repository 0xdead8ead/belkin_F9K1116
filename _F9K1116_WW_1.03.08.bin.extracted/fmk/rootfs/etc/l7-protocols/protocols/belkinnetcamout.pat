# Belkin NetCam F7D7601/F7D7602 version 1 with Seedonk
# Pattern attributes: unknown
# Protocol groups: proprietary steaming_video
# Wiki: n/a
# Copyright (C) 2012 David Shao, Belkin International, INC.; See ../LICENSE

belkinnetcamout
# When sending the video stream to the cloud server, the first packet's payload consistently starts with x77 x30
# followed by 21 character and followed by x00 x00 x00 x42 xa0 x85
# 77:30:be:56:d5:3f:87:2b:08:7f:5c:77:ff:3b:24:ca:16:9d:70:f5:59:1e:75:00:00:00:42:a0:85:51:4c:18:07:
# 77:30:be:56:d5:3f:87:2b:08:7f:5c:77:ff:3b:24:ca:16:9d:70:f5:59:1e:75:00:00:00:42:a0:85:51:4c:18:07:
# 77:30:6f:d4:5d:49:03:4e:73:ce:43:d4:7a:2a:04:c9:d9:7d:70:f5:59:1e:75:00:00:00:42:a0:85:51:4c:18:07:
# HD 77:30:6f:d4:5d:49:03:4e:73:ce:14:4b:02:32:a2:95:12:23:c7:92:ba:d4:76:00:00:00:42:a0:85:50:78:18:06:
# HD 77:30:49:66:e0:7a:8c:de:d5:a0:18:a6:0f:4b:7f:bf:d1:29:d9:15:38:d5:76:00:00:00:42:a0:85:49:2f:18:06:
# HD 77:30:49:66:e0:7a:8c:de:d5:a0:18:a6:0f:4b:7f:bf:d1:29:3f:88:43:d5:76:00:00:00:42:a0:85:51:66:18:06:
^\x77\x30.....................\x42\xa0\x85