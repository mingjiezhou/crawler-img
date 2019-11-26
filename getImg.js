var request = require('request');
var fs = require('fs');

// request({url:'https://www.baidu.com'}, function (error, response, body) {
//        console.log(body)//打印百度首页html内容
// })
//抓取网页图片并保存到本地

function changeColor(i, times){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      request(`http://www.ruanyifeng.com/images_pub/pub_${i}.jpg`).pipe(fs.createWriteStream(`img/${i}.png`))
      resolve();
    },times)
  })
  
}
async function loop() {
  for (let i=1; i<356; i++) {
    await changeColor(i, 300);
  }
}
loop();
