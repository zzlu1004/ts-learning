/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-25 15:50:15
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-25 15:56:38
 */
// 接口：是一种能力，一种约束而已

(() => {
    // 定义一个接口
    interface IPerson{
        firstName: string,
        lastName: string
    }
    function showFullName(person: IPerson) {
        return person.firstName + "_" + person.lastName
    }
    const person = {
        firstName: '东方',
        lastName: '不败'
    }
    console.log(showFullName(person))
})()