/*************************************

项目名称：Swiftgram(Loon专用解锁版)
更新日期：2025-09-05
脚本作者：改写自 chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.swiftgram\.app\/(v\d\/user\/info|restoreAccess) url script-response-body https://raw.githubusercontent.com/xxx/Rewrite/main/swiftgram.js

[mitm]
hostname = api.swiftgram.app

*************************************/


// 获取请求的 URL
const url = $request.url;

// 把响应体转成对象
var obj = JSON.parse($response.body);

// 匹配订阅接口
const subscriptionTest = /https:\/\/api\.swiftgram\.app\/v\d\/user\/info/;

// 匹配恢复高级解锁接口
const premiumTest = /https:\/\/api\.swiftgram\.app\/restoreAccess/;


// 命中订阅接口 → 强制解锁订阅
if (subscriptionTest.test(url)) {
  obj.data.user = {
    ...obj.data.user,        // 保留原始字段
    subscription: true,      // 开启订阅状态
    store_subscription: true,
    lifetime_subscription: true
  };
}


// 命中恢复接口 → 返回 premiumAccess
if (premiumTest.test(url)) {
  obj["data"] = { "premiumAccess": true };
}


// 输出修改后的响应
$done(obj);
