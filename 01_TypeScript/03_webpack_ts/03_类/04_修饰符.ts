/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 14:37:05
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 15:02:46
 */
// 修饰符（类中的成员的修饰符）：主要描述类中的成员（属性，构造函数，方法）的可访问性
// public修饰符 类中成员都有自己的默认访问修饰符，public，代表公共的，任何位置都可以访问
// private修饰符 类中的成员如果使用private来修饰，那么外部是无法访问这个成员数据的，当然子类中也是无法访问的
// protected修饰符 类中的成员如果使用protected来修饰，那么外部是无法访问这个成员数据的，子类是可以访问的
(() => {
    class Person {
        // public name: string
        // private name: string
        protected name: string
        constructor(name: string) {
            this.name = name
        }
        eat() {
            console.log('好吃', this.name)
        }
    }

    class Student extends Person{
        constructor(name: string) {
            super(name)
        }
        play() {
            // protected修饰符时，可以访问
            console.log(this.name)
        }
    }
    const person = new Person('大蛇丸')
    // private protected修饰符时，外部无法访问
    // console.log(person.name)
    person.eat()

    const stu = new Student('红豆')
    stu.play()
    // private protected修饰符时，外部无法访问
    // console.log(stu.name)
})()