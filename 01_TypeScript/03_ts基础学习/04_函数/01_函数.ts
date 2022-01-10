/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-26 13:52:22
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 17:17:56
 */

// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可
(() => {
    // js中的书写方式
    // 函数声明，命名函数
    function add1(x, y) {
        return x + y
    }
    // 函数表达式
    const add2 = function (x, y) {
        return x + y
    }

    // ts中书写
    // 函数声明，命名函数
    function add3(x: string, y: string): string {
        return x + y
    }
    const result1: string = add3('111', '222')
    console.log(result1)
    // 函数表达式
    const add4 = function (x: number, y: number): number {
        return x + y
    }
    const result2: number = add4(111, 222)
    console.log(result2)

    // 函数的完整的写法
    const add5: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y
    }
    console.log(add5(10, 100))
})()