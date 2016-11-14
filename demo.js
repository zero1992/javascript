//数组去重  for
var ary = [1, 2, 2, 3, 4, 5, 3, 2, 2, 1];
var a = [];
for (var i = 0; i < ary.length; i++) {
    if (a.indexOf(ary[i]) === -1) {
        a.push(ary[i])

    }

}
console.log(a);

//数组去重  forEach
var ary = [1, 2, 2, 3, 4, 5, 3, 2, 2, 1];
var a = []
ary.forEach(function (item, index) {
    if (a.indexOf(item) === -1) {
        a.push(item)
    }
})

//数组去重  map
var ary = [1, 2, 2, 3, 4, 5, 3, 2, 2, 1];
var a = []
ary.map(function (item, index) {
    if (a.indexOf(item) === -1) {
        a.push(item)
    }
})

//数组去重 
var ary = [1, 2, 2, 3, 4, 5, 3, 2, 2, 1, 6];
var obj = {};
for (var i = 0; i < ary.length; i++) {
    if (ary.indexOf(ary[i]) !== ary.lastIndexOf(ary[i])) {
        ary.splice(i, 1);
        i--;
    }

}

//数组去重 对象属性不能重复
var a = [1, 2, 3, 4, 1, 2, 3];
function distinct_siple_array(arr) {
    var result = [];
    var map = {};//利用对象属性不能重复这个特点 对基本集合元素进行去重操作
    //遍历整个数组 foreach 写法 js当中 不存在 foreach 关键词 只有类似foreach的写法
    // for(i in arr){
    //     if(!map[arr[i]]){
    //         result.push(arr[i]);
    //         map[arr[i]]=true;//值可以是任意值
    //     }
    // }
    //注意:i变量”用来指定变量，指定的变量可以是数组元素，也可以是对象的属性。

    for (i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            result.push(arr[i]);
            map[arr[i]] = true;//值可以是任意值
        }
    }

    return result;
}

distinct_siple_array(a)


//输入hello world 输出dlrow olleh
function reverse(e) {
    return e.split("").reverse().join("").substring(4, 6);
}
reverse("abcdefg");//方法调用
//split截取字符，reverse 反转字符，join连接字符，substr 截取字符串


//打印出1-10000之间的所有对称数(如121,1331,2442)
function reverseString(string) {
    return string.split("").reverse().join("");
}

for (i = 100; i < 1000; i++) {
    if (i == reverseString(i.toString())) {
        console.log(i);
    }
}

//计算等差出列1+2+3+.....1000的值
var result = 0;
for (var i = 0; i <= 1000; i++) {
    result += i;
}

//一个新入职（25岁），月工资为2000元的员工，每年涨工资20%，到退休时（60岁）的月工资是多少？ 直到退休拿了多少钱?
var money=2000;
var get_money=0;
for(age=25;age<=60;age++){
    for(month=1;month<=12;month++){
        get_money=get_money+money;
    }
    money=money*1.2;
}
console.log("60岁薪资:"+money+"直到退休拿了:"+get_money);

//