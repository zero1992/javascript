//数组去重  for
var ary=[1,2,2,3,4,5,3,2,2,1];
var a=[];
for(var i=0;i<ary.length;i++){
	if(a.indexOf(ary[i])===-1){
		a.push(ary[i])

	}

}
console.log(a);

//数组去重  forEach
var ary=[1,2,2,3,4,5,3,2,2,1];
var a=[]
ary.forEach(function(item,index){
	if(a.indexOf(item)===-1){
		a.push(item)
	}
})

//数组去重  map
var ary=[1,2,2,3,4,5,3,2,2,1];
var a=[]
ary.map(function(item,index){
	if(a.indexOf(item)===-1){
		a.push(item)
	}
})

//数组去重 
var ary=[1,2,2,3,4,5,3,2,2,1,6];
var obj={};
for(var i=0;i<ary.length;i++){
	if(ary.indexOf(ary[i])!==ary.lastIndexOf(ary[i])){
		ary.splice(i,1);
		i--;
	}

}

//数组去重 对象属性不能重复
var a=[1,2,3,4,1,2,3];
function distinct_siple_array(arr){
        var result=[];
        var map={};//利用对象属性不能重复这个特点 对基本集合元素进行去重操作
        //遍历整个数组 foreach 写法 js当中 不存在 foreach 关键词 只有类似foreach的写法
        // for(i in arr){
        //     if(!map[arr[i]]){
        //         result.push(arr[i]);
        //         map[arr[i]]=true;//值可以是任意值
        //     }
        // }
        //注意:i变量”用来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
        
        for(i=0;i<arr.length;i++){
            if(!map[arr[i]]){
                result.push(arr[i]);
                map[arr[i]]=true;//值可以是任意值
            }
        }
        
        return result;
    }

distinct_siple_array(a)