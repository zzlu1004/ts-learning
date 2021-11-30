/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 15:56:29
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 16:17:44
 */
// 抽象类：包含抽象方法（抽象方法一般没有任何的具体内容），也可以包含实例方法，抽象类是不能被实例化，为了让子类进行实例化及实现内部的抽象方法
// 抽象类的目的都是为了派生类存活的
(() => {
    abstract class Animal {
        // 抽象属性
        // abstract name: string = '小甜甜'
        // 抽象的方法不能写具体的实现内容
        abstract eat()
        sayHi() {
            console.log('hi')
        }
    }

    class Dog extends Animal{
        // name: string = '小黄'
        // 需重新实现 抽象类中eat方法
        eat() {
            console.log('舔着吃')
        }
    }

    // 实例化抽象类的对象
    // const ani: Animal =  new Animal()
    const dog = new Dog()
    dog.eat()
    dog.sayHi()
})()