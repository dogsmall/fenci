let {
    oops
} = require('nlp_sf');
var fs = require('fs')
var xlsx = require('node-xlsx')
let path = require('path');
// let text = '这是待分词文本，调用oops接口直接分词并且统计词频。';


// let userDict = '../assets/userDict.txt';
// userDict = path.join(__dirname, userDict);
// let dict = {
//   userDict: userDict,
//   userWord: ['两国关系 n'].
// };



var obj = xlsx.parse('weibo5.xlsx');
var res = "";
for (var i = 0; i < obj[0].data.length; i++) {
    // var id = Math.ceil(Math.random() * 5300);
    res += obj[0].data[i][0];
}

let query = {
    top: 100,
    freq: 0,
    len: 1,
    join: false,
    tags: ['a']
};
let params = {
    text: res,
    // dict: dict,
    query: query
}
let arr = oops.divide(params);
console.log(arr)
let buffer = xlsx.build([{
    name: 'mySheet',
    data: arr
}]);

fs.writeFile('weibo5_fenci_a.xlsx', buffer, {
    'flag': 'w+'
}, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("写入成功");
});