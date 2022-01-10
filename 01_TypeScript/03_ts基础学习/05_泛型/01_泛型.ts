/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-26 13:52:22
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-12-01 18:39:08
 */

// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据类型，而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
    // 需求：定义一个函数，传入2个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在一个数组中
    function getArr(value: number, count: number): number[] {
        const arr: number[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr1 = getArr(100.123, 3)
    console.log(arr1)
    
    function getArr2(value: string, count: number): string[] {
        const arr: string[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr2 = getArr2('1', 3)
    console.log(arr2)

    // 传入任意类型的数据
    function getArr3(value: any, count: number): any[] {
        const arr: any[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr3 = getArr3('1', 3)
    console.log(arr3)
    // console.log(arr3[0].toFixed(2)) // 没有任何智能提示

    // 传入任意类型的数据
    function getArr4<T>(value: T, count: number): T[] {
        const arr: Array<T> = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr4 = getArr4<number>(1, 3)
    console.log(arr4)
    console.log(arr4[0].toFixed(2)) // 没有任何智能提示
    const arr5 = getArr4<string>('123', 3)
    console.log(arr5)
    console.log(arr5[0].split('')) // 没有任何智能提示
})()