/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 15:29:07
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 15:38:34
 */
// 存取器：让我们可以有效的控制对 对象中成员的访问，通过getters和setters来进行操作
(() => {
    // 外部可以传入姓氏和姓名数据，同事使用set和get控制姓名的数据，外部也可以进行修改操作
    class Person {
        firstName: string
        lastName: string
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }
        // 姓名的成员属性（外部可以访问，也可以修改）

        // 读取器
        get fullName() {
            return this.firstName + '_' + this.lastName
        }

        // 设置器
        set fullName(val: string) {
            let names = val.split('_')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    const person: Person = new Person('东方', '不败')
    console.log(person)
    console.log(person.fullName)
    // 设置
    person.fullName = '诸葛_孔明'
    console.log(person.fullName)
    console.log(person)
})()