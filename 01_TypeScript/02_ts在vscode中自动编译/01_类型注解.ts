/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-25 15:41:52
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-25 15:45:20
 */
// 类型注解: 是一种轻量级的为函数或者变量添加的约束
(() => {
    function showMsg(str: string) {
        return '床前明月光，' + str
    }
    let msg = '疑是地上霜'
    // let msg = [10, 20, 30]
    console.log(showMsg(msg))
})()