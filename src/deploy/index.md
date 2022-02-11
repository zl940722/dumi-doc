---
nav:
title: Supreview 部署步骤
path: /deploy
order: 1
---

### 1.第一步从 oss 中拿到部署包(版本替换成 releases 版本包路径)

./ossutil64 cp oss://ai-private-deploy/releases/bsg-app-2/supreview/supreview-ansibleV2.0.x.tar.gz .

### 2.解压，解压完成后有两个文件夹

### 3.进入 base/working_playbook/vars 路径打开 confg.yml 修改配置

### 4.修改完进入 base/scripts 下执行./deploy.sh
