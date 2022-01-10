/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 17:36:40
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 17:40:19
 */
// 剩余参数（rest参数）
// 剩余参数是放在函数声明的时候，所有参数的最后
(() => {
    function showMsg(str: string, str1: string, ...args: string[]){
        console.log(str)
        console.log(str1)
        console.log(args)
    }
    showMsg('a', 'b', 'c', 'd', 'e')
})()