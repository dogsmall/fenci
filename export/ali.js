var fs = require('fs')
var xlsx = require('node-xlsx')

var obj = xlsx.parse('aliweixin.xlsx');

// console.log(obj);
var s = []
var keywords = [
    "阿里巴巴大文娱",
    "阿里巴巴国际交易",
    "阿里巴巴全球速卖通",
    "阿里巴巴速卖通",
    "阿里百川",
    "阿里大文娱",
    "阿里国际",
    "阿里国际交易",
    "阿里健康",
    "阿里聚划算",
    "阿里旅行",
    "阿里妈妈",
    "阿里企业邮箱",
    "阿里全球速卖通",
    "阿里软件",
    "阿里速卖通",
    "阿里体育",
    "阿里投创",
    "阿里旺旺",
    "阿里文学",
    "阿里星球",
    "阿里研究院",
    "阿里音乐",
    "阿里邮箱",
    "阿里游戏",
    "阿里云",
]
obj[0].data.map((x) => {
    console.log(x)
        // x[0] = x[0].replace(/@阿里/g, '').replace(/\(.*\)/g, '')
        // x[1] = x[1].replace(/@阿里/g, '').replace(/\(.*\)/g, '')

    for (let i = 0; i < keywords.length; i++) {
        // x[0] = x[0].replace(new RegExp(keywords[i], 'g'), '')
        // x[1] = x[1].replace(new RegExp(keywords[i], 'g'), '')
        x[12] = x[12].replace(new RegExp(keywords[i], 'g'), '')


    }
    // if (x[0].indexOf("阿里") != -1 || x[0].indexOf("阿里巴巴") != -1 || x[1].indexOf("阿里") != -1 || x[1].indexOf("阿里巴巴") != -1) {
    //     s.push(x)
    // }
    if (x[12].match(/(阿里巴巴|阿里)/g) && x[12].match(/(阿里巴巴|阿里)/g).length >= 3) {
        s.push(x)
    }

});


let buffer = xlsx.build([{
    name: 'mySheet',
    data: s
}]);

fs.writeFile('alisweixin.xlsx', buffer, {
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