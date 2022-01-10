/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 14:54:56
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 15:26:46
 */
// readonly修饰符：首先是一个关键字，对类中的属性成员惊醒修饰，修饰符后，该属性成员，就不能再外部被随意的修改了
// 构造函数中，可以对只读的属性成员的数据进行修改
// 构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么类中就有了这个只读的成员属性了，外部可以访问，但是不能修改
// 构造函数中的参数可以使用public，及private，protected进行修饰，无论是哪个进行修饰，该类中都会添加一个属性成员
(() => {

    // readonly 修饰类中成员的
    class Person {
        readonly name: string
        constructor(name: string) {
            this.name = name
        }
        sayHi() {
            console.log('hello')
            // 类中的普通方法中，也是不能修改readonly修饰的成员属性
            // this.name = '大甜甜'
        }
    }

    const person: Person = new Person('小甜甜')
    console.log(person)
    console.log(person.name)
    // 此时无法修改，因为name属性是只读的
    // person.name = '大甜甜'
    // console.log(person.name)

    // readonly 修饰类中的构造函数中的参数（参数属性）
    class Person1 {
        // 构造函数中的name参数，一旦使用readonly 进行修饰后，那么该name参数可以叫参数属性
        // 构造函数中的name参数，一旦使用readonly 进行修饰后，那么Person1类中就有了一个name的成员
        // 构造函数中的name参数，一旦使用readonly 进行修饰后，外部也是无法修改类中的name属性
        constructor(readonly name: string = '大甜甜') {
            // this.name = name
        }
        // 构造函数中的name参数，一旦使用public 进行修饰后，那么Person1类中就有了一个公共的name成员
        // constructor(public name: string = '大甜甜') {
        //     // this.name = name
        // }
        // 构造函数中的name参数，一旦使用private 进行修饰后，那么Person1类中就有了一个私有的name成员
        // constructor(private name: string = '大甜甜') {
        //     // this.name = name
        // }
        // 构造函数中的name参数，一旦使用protected 进行修饰后，那么Person1类中就有了一个受保护的name成员，只能在本类和派生类中使用
        // constructor(protected name: string = '大甜甜') {
        //     // this.name = name
        // }
    }

    const person1: Person1 = new Person1('小甜甜')
    console.log(person1)
    // person1.name = '真好'
    console.log(person1.name)
})()