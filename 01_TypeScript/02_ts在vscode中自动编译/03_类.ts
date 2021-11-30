/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-25 15:58:59
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-25 16:06:49
 */
// ts中 书写js中的类，演示效果
(() => {
    // 定义一个接口
    interface IPerson{
        firstName: string,
        lastName: string
    }
    // 定义一个类
    class Person{
        firstName: string
        lastName: string
        fullName: string
        constructor(firstName: string, lastName:string) {
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = this.firstName + '_' + this.lastName
        }
    }
    // 定义一个函数
    function showFullName(person: IPerson) {
        return  person.firstName + '_' + person.lastName
    }
    // 实例化对象
    const peorson = new Person('诸葛', '孔明')
    console.log(showFullName(peorson))
})()