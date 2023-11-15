let arr=[1,10,3,4,5,6,7,8];
// arr.forEach(number=>{
//     console.log(number)
// })
// let newArr=arr.map(number=> number*2)
// console.log(newArr)
// let sum=arr.reduce((sum,number)=>(sum+number),0)
// console.log(sum)

// let max=arr.reduce((max,number)=>{
//     if(max>number){
//         return max
//     } else {
//         return number;
//     }
// })
// console.log(max)
// let newArr=arr.filter((number)=> (number>2 && number<7))
// console.log(newArr)

//some nếu có MỘT phần tử ở trong mảng đúng điều kiện thì true
// let newArr=arr.some((number)=>(number>20))
// console.log(newArr)

//every TẤT CẢ các phần tử trong mảng phải thỏa mãn điều kiện thì mới true
// let newArr=arr.every((number)=>(number>0))
// console.log(newArr)

const sum=(...rest)=>{
    return rest;
}
// console.log(sum(1,2,3,4))
//
// let arr1=[1,2,3,4];
// let arr2=[1,2,3,4];
// let arr3=[...arr1,...arr2]
// console.log(arr3)

// let obj1={
//     name: 'a',
//     age: 6
// }
// let obj2={
//     class: 'a',
//     number: 6
// }
// let obj3={
//     ...obj1,...obj2
// }
// console.log(obj3)

// let {name,age}=obj1
// console.log(name)
// console.log(age)


let arrr=[1,2,3];
let [a,...rest]=arrr;
console.log(a)
console.log(rest)

