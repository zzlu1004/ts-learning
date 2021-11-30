/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-26 13:52:22
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 10:11:56
 */

// 接口：是一种类型，是一种规范，是一种能力，是一种约束
(() => {
    // 需求：创建人的对象，需要对人的属性进行一定的约束

    // id是number类型, 必须有, 只读的
    // name是string类型, 必须有
    // age是number类型, 必须有
    // sex是string类型, 可以没有
    interface IPerson {
        readonly id: number
        name: string
        age: number
        sex?: string
    }

    // 定义一个对象，该对象的类型为借口IPerson
    const person:IPerson = {
        id: 1,
        name: '小甜甜',
        age: 18,
        sex: '女'
    }
    console.log(person)
    // person.id = 100
})()