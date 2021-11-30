/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-25 15:08:25
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-25 15:23:01
 */
(() => {
    // str 是string类型
    function sayHi(str: string) {
        return '你好啊' + str
    }
    let text = '小甜甜'
    console.log(sayHi(text))
})()
