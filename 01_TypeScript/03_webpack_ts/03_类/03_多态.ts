/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 11:40:50
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 14:29:19
 */

// 多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {    
    // 定义一个父类
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        run(distance: number = 1) {
            console.log(`${this.name}跑了${distance}米`)
        }
    }
    // 定义一个子类
    class Dog extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number = 5) {
            console.log(`${this.name}跑了${distance}米`)
        }
    }
    // 再定义一个子类
    class Pig extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number = 10) {
            console.log(`${this.name}跑了${distance}米`)
        }
    }

    // 实例化父类对象
    const ani: Animal = new Animal('动物')
    ani.run()

    // 实例化子类对象
    const dog: Dog = new Dog('狗盛')
    dog.run()

    // 实例化子类对象
    const pig: Pig = new Pig('八戒')
    pig.run()
    console.log("==================")
    // 父类和子类的关系，此时父类的类型创建子类的对象
    const dog1: Animal = new Dog('小黄')
    dog1.run()
    const pig1: Animal = new Pig('小猪')
    pig1.run()

    console.log("==================")
    function showRun(ani: Animal) {
        ani.run()
    }
    showRun(dog1)
    showRun(pig1)
})()