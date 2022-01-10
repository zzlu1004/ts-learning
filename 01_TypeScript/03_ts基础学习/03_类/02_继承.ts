/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 11:20:50
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 14:19:54
 */

// 继承：类与类之间的关系
// 继承后类与类之间的叫法：
// A类继承了B这个类，那么此时A类叫子类，B类叫基类
// 子类----》派生类
// 基类----》超类（父类）
// 一旦发生了继承的关系，就出现了父子类的关系
(() => {
    // 定义一个类，基类
    class Person {
        // 定义属性
        name: string
        age: number
        gender: string
        // 定义构造函数
        constructor(name: string, age: number, gender:string) {
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHi(str: string) {
            console.log(`我是：${this.name},${str}`)
        }
    }

    // 定义一个类，继承自Person
    class Student extends Person {
        constructor(name: string, age: number, gender: string) {
            super(name, age, gender)
        }
        sayHi() {
            console.log('我是学生类中的sayHi方法')
            super.sayHi('哈哈')
        }
    }

    // 实例化Person
    const person = new Person('明明', 20, '男')
    person.sayHi('嘎嘎')
    // 实例化Student
    const stu = new Student('小甜甜', 18, '女')
    stu.sayHi()

    // 总结：类和类之间如果要有继承关系，需要使用extends 关键字
    // 子类中可以调用父类中的构造函数，使用的是super关键字（包括调用父类中的实例方法，也可以使用super）
    // 子类中可以重写父类中的方法
})()