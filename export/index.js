var fs = require('fs')
var xlsx = require('node-xlsx')

var obj = xlsx.parse('5.xlsx');

// console.log(obj);
var s = []
var keywords = ["腾讯新闻",
    "腾讯体育",
    "腾讯视频",
    "腾讯娱乐",
    "腾讯时尚",
    "腾讯动漫",
    "腾讯星座",
    "腾讯财经",
    "腾讯汽车",
    "腾讯房产",
    "腾讯科技",
    "腾讯数码",
    "腾讯游戏",
    "腾讯儒学",
    "腾讯教育",
    "腾讯文化",
    "腾讯儿童",
    "腾讯育儿",
    "腾讯微博",
    "腾讯公益",
    "腾讯旅游",
    "QQ",
    "腾讯TM",
    "腾讯RTX",
    "腾讯邮箱",
    "腾讯电脑管家",
    "腾讯手机管家",
    "腾讯拍拍",
    "腾讯理财通",
    "腾讯影业",
    "腾讯电竞",
    "腾讯网",
    "腾讯地图",
    "腾讯云",
    "腾讯开放平台",
    "腾讯会员",
    "腾讯友邦",
    "腾讯金融",
    "腾讯客服",
    "腾讯微云",
    "腾讯控股",
    "腾讯课堂",
    "腾讯通",
    "腾讯应用宝",
    "腾讯财付通",
    "腾讯研究院",
    "腾讯拍客"
]
obj[0].data.map((x) => {
    // console.log(x)
    x[0] = x[0].replace(/@腾讯/g, '').replace(/\(.*\)/g, '')
    x[1] = x[1].replace(/@腾讯/g, '').replace(/\(.*\)/g, '')

    for (let i = 0; i < keywords.length; i++) {
        x[0] = x[0].replace(new RegExp(keywords[i], 'g'), '')
        x[1] = x[1].replace(new RegExp(keywords[i], 'g'), '')
            // x[12] = x[12].replace(new RegExp(keywords[i], 'g'), '')


    }
    if (x[0].indexOf("腾讯") != -1 || x[0].indexOf("鹅厂") != -1 || x[1].indexOf("腾讯") != -1 || x[1].indexOf("鹅厂") != -1) {
        s.push(x)
    }
    // if (x[12].match(/(鹅厂|腾讯)/g) && x[12].match(/(鹅厂|腾讯)/g).length >= 3) {
    //     console.log(x[12].match(/(鹅厂|腾讯)/g))
    //     s.push(x)
    // }

});


let buffer = xlsx.build([{
    name: 'mySheet',
    data: s
}]);

fs.writeFile('weibo5.xlsx', buffer, {
    'flag': 'w+'
}, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("写入成功");
});

// fs.readFile('weibo.csv', function(err, data) {
//     let lines = data.toString().split("\n")

//     lines.map((x) => {
//         console.log(x)

//     })

// })