/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 10:39:22
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 11:06:01
 */
// 类 类型：类的类型可以通过接口来实现
(() => {
    // 定义一个接口
    interface IFly{
        // 该方法没有任何的实现（方法中什么都没有）
        fly()
    }
    // 定义一个类，这个类的类型就是上面定义的接口(实际上也可以理解为IFly接口约束了多囊谦的这个Person类)
    class Person implements IFly {
        // 实现接口中的方法
        fly() {
            console.log('i can fly')
        }
    }

    const person = new Person()
    person.fly()

    // 定义一个接口
    interface ISwim {
        swim()
    }
    // 定义一个类，这个类的类型就是IFly和ISwim(当前这个类可以实现多个接口，一个类同事也可以被多个接口惊醒约束)
    class Person2 implements IFly,ISwim {
        fly() {
            console.log('i can fly')
        }
        swim() {
            console.log('i can swim')
        }
    }

    const person2 = new Person2()
    person2.fly()
    person2.swim()

    // 总结：类可以通过接口的方式，来定义当前这个类的类型
    // 类可以实现一个接口，类也可以实现多个接口，要注意接口中的内容都要真正的实现

    // 接口可以继承其他的多个接口

    interface IMyFlyAndSwim extends IFly, ISwim { }
    // 定义一个类，类型为IMyFlyAndSwim
    class Person3 implements IMyFlyAndSwim {
        fly() {
            console.log('i can fly')
        }
        swim() {
            console.log('i can swim')
        }
    }

    const person3 = new Person3()
    person2.fly()
    person2.swim()
    
    // 总结：接口和接口之间叫继承（使用的是extends关键字）类与接口之间交实现（使用的implements关键字）
})()