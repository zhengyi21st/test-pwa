self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  var payload = event.data ? event.data.text() : 'no payload';
  var title = '消息标题adfdsf';
  event.waitUntil(
    // 使用提供的信息来显示 Web 推送通知
    self.registration.showNotification(title, {
      body: payload.msg,
      url: payload.url,
      icon: payload.icon
    })
  );

});