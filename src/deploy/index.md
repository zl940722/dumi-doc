---
nav:
title: Supreview 部署步骤
path: /deploy
order: 1
---

### 1.第一步从oss中拿到部署包(版本替换成releases版本包路径)

./ossutil64 cp oss://ai-private-deploy/releases/bsg-app-2/supreview/supreview-ansibleV2.0.x.tar.gz .

### 2.解压，解压完成后有两个文件夹

### 3.进入base/working_playbook/vars路径打开confg.yml修改配置

### 4.修改完进入base/scripts下执行./deploy.sh
