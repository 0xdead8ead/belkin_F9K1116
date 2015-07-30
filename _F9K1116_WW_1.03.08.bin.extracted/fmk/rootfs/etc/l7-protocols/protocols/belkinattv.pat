# Belkin @TV G1V1000 version 1 with Monsoon
# Pattern attributes: unknown
# Protocol groups: proprietary steaming_video
# Wiki: n/a
# Copyright (C) 2013 David Shao, Belkin International, INC.; See ../LICENSE

belkinattv
# The UDP stream sent out by the @TV is as follows.  Always 16 octets followed by x02, x02, x03
# 76:4b:ec:50:5e:3f:d2:f6:2d:34:c0:5e:45:11:ca:79:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:02:00:00:00:02:00:00:03
# 55:66:fe:64:e9:59:dc:42:55:68:48:7c:9e:ee:52:7c:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:02:00:00:00:02:00:00:03
# 50:6e:e9:7d:e6:3f:f9:bc:6c:bd:18:46:3c:f5:fb:93:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:02:00:00:00:02:00:00:03
# 5a:a0:70:5a:f2:b8:e5:27:81:8a:d3:6e:83:44:5d:78:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:02:00:00:00:02:00:00:03
# c7:11:25:e4:b2:c4:a5:26:a3:35:f9:34:86:a2:af:95:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:02:00:00:00:02:00:00:03
^................\x02\x02\x03