var name = '小明'
var age = 18
var flag = true

function sum(num1,num2){
  return num1+num2
}

if (flag) {
  console.log(sum(30, 22));
}

//导出方式一
export {
  flag,sum
}

//导出方式二
