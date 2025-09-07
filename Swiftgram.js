/***********************************
> 应用名称：Nicegram
> 软件版本：1.5.6
> 脚本作者：ddgksf2013
> 修改适配：ChatGPT（适配 Loon，增加详细注释）
> 更新时间：2025-09-07
> 特别说明：⚠️仅供学习研究，请勿用于商业用途⚠️
***********************************/


[Script]

# 解锁 Swiftgram 会员功能
http-response ^https?:\/\/swiftgram\.app\/api\/v\d\/(ai-assistant\/purchase-list|user\/info|telegram\/auth) script-path=https://raw.githubusercontent.com/LecherousMan/QuantumultX/refs/heads/main/Swiftgram.js, requires-body=true, tag=Nicegram解锁

[MITM]

hostname = swiftgram.app
