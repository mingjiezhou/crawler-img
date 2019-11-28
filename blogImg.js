var request = require('request');
var fs = require('fs');

// 抓取阮老师网站背景图，并保存到本地
function getImg(i, times){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      request(`http://www.ruanyifeng.com/images_pub/pub_${i}.jpg`).pipe(fs.createWriteStream(`img/${i}.png`))
      resolve();
    },times)
  })
  
}
async function loop() {
  for (let i=1; i<356; i++) {
    await getImg(i, 300);
  }
}
loop();
