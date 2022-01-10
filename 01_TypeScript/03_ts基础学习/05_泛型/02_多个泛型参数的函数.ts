/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-12-01 18:41:41
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-12-01 18:45:26
 */
// 多个泛型参数的函数：函数中多个泛型的参数
(() => {
    function getMsg<K, V>(value: K, value2: V) :[K, V]{
        return [value, value2]
    }
    const arr1 = getMsg<string, number>('jk', 100)
    console.log(arr1)
    console.log(arr1[0].split(''), arr1[1].toFixed(2))
})()