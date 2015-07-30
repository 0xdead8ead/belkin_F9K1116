# Belkin NetCam F7D7601/F7D7602 version 1 with Seedonk
# Pattern attributes: unknown
# Protocol groups: proprietary steaming_audio
# Wiki: n/a
# Copyright (C) 2013 David Shao, Belkin International, INC.; See ../LICENSE

belkinnetcamaudio
# This stream alwasy starts \x41 \x03 \x3d \x10
# 41:03:3d:00:10:00:00:00:00:00:00:7a:00:fd:01:00:00:2a:2a:ab:13:fc:e0:76:00:00:00:be:56:d5:3f:87:2b:08:7f:d9:e6:61:1e:4b:ec:8d:c6:36:36:2e:31:36:30:2e:31:33:33:2e:37:33:3a:36:31:37:38
# 41:03:3d:00:10:00:00:00:00:00:00:7a:00:fd:01:00:00:2a:2a:ab:13:fc:e0:76:00:00:00:be:56:d5:3f:87:2b:08:7f:d9:e6:61:1e:4b:ec:8d:c6:36:36:2e:31:36:30:2e:31:33:33:2e:37:33:3a:36:31:37:38
# if we miss the initial, the subsequent packets are also simular 
# 41:03:54:00:10:00:00:00:00:00:00:79:00:fd:01:00:00:2a:2a:ab:13:fc:e0:76:00:00:00:be:56:d5:3f:87:2b:08:7f:d9:e6:61:1e:4b:ec:8d:c6:23:46:72:69:20:4d:61:72:20:30:38:20:31:33:3a:31:35:3a:35:33:20:50:53:54:20:32:30:31:33:0a:75:64:70:2d:70:6f:72:74:3d:30:0a
^\x41\x03[\x3d\x54]\x10