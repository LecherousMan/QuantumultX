/*************************************

项目名称：Swiftgram(Loon专用解锁版)
更新日期：2025-09-05
脚本作者：Jocker
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.swiftgram\.app\/(v\d\/user\/info|restoreAccess) url script-response-body https://raw.githubusercontent.com/LecherousMan/QuantumultX/refs/heads/main/swiftgram.js
[mitm]
hostname = api.swiftgram.app

*************************************/


// 获取当前请求的 URL
const url = $request.url;

// 将响应数据转成 JS 对象
let obj = JSON.parse($response.body);

// 匹配订阅接口
const subscriptionTest = /https:\/\/api\.swiftgram\.app\/v\d\/user\/info/;

// 匹配恢复高级解锁接口
const premiumTest = /https:\/\/api\.swiftgram\.app\/restoreAccess/;


// 如果是订阅接口，强制写入订阅信息
if (subscriptionTest.test(url)) {
  obj.data.user = {
    ...obj.data.user,        // 保留原始字段
    subscription: true,      // 订阅状态
    store_subscription: true,
    lifetime_subscription: true
  };
}


// 如果是恢复接口，直接返回 premiumAccess
if (premiumTest.test(url)) {
  obj["data"] = { "premiumAccess": true };
}


// 输出修改后的结果
$done(obj);