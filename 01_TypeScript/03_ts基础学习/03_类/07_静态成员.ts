/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 15:41:15
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 15:54:36
 */
// 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为静态成员
// 静态成员在使用的时候是通过类名.的这种语法来调用的
(() => {
    class Person {
        // 类中默认有一个内置的name属性，所以此时会出现错误信息提示
        static name1: string
        // 构造函数不能通过static来进行修饰
        constructor() {
            // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
            // this.name1 = name
        }
        static sayHi() {
            console.log(`say hi`)
        }
    }

    const person: Person = new Person()
    // 通过实例对象调用
    // console.log(person.name1)
    console.log(Person.name1)
    // person.sayHi()
    Person.name1 = '大佐'
    console.log(Person.name1)
    // 通过类名来调用
    Person.sayHi()
})()