const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《UNIX编程艺术》',
        date:'2006-2',
        price:59.00,
        count:1
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2008-10',
        price:39.00,
        count:1
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2006-3',
        price:128.00,
        count:1
      }
    ]
  },
  methods:{
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    remove(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){

      //普通for循环
      // let totalPrice = 0
      // for (let i =0;i<this.books.length;i++){
      //   totalPrice +=this.books[i].price*this.books[i].count
      // }

      //ES6写法
      // let totalPrice = 0
      // for(let item of this.books){
      //   totalPrice += item.price*item.count
      // }
      //  return totalPrice

      //reduce
      return this.books.reduce(function (preValue,book){
        return preValue + book.price * book.count
      },0)
    }
  },
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  }
})


//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程(第一公民:对象)/函数式编程（第一公民:函数）
//filter/map/reduce
//filter中的回调函数必须返回一个布尔值
//返回true：函数内部会自动将这次回调的n加入到新的数组中
//返回false：函数内部会过滤掉这次的n

const nums = [10,20,111,222,555,40,50]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n)
console.log(total);

//想改变数组的时候用map,想对数组进行过滤用filter，累加数组用reduce。
//函数式编程写法
// let total = nums.filter(function (n){
//   return n<100
// }).map(function (n){
//   return n*2
// }).reduce(function (preValue,n){
//   return preValue + n
// },0)
// console.log(total);


// //1.filter的使用
// let newNums = nums.filter(function (n){
//   return n<100
// })
// console.log(newNums);
//
// //2.map的使用
// //20,40,80,100
// let new2Nums = newNums.map(function (n){
//   return n*2
// })
// console.log(new2Nums);
//
// //3.reduce的使用
// //reduce对数组中的所有内容进行汇总
// let total = new2Nums.reduce(function (preValue,n){
//   return preValue + n
// },0)
// console.log(total);
//第一次：preValue 0 n 20
//第二次：preValue 20 n 40
//第三次：preValue 60 n 80
//第四次：preValue 140 n 100
//总共240