/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 17:41:19
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 17:50:38
 */
// 函数重载：函数名字相同，函数参数及个数不同
(() => {
    // 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加

    // 函数重载声明
    function add(x: string, y:string):string
    function add(x: number, y:number):number
    // 函数声明
    function add(x: string | number, y: string | number): string | number {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y
        }
    }

    console.log(add('诸葛', '孔明'))
    console.log(add(10, 20))
    // console.log(add('真香', 10))
    // console.log(add(100, '真好'))
})()