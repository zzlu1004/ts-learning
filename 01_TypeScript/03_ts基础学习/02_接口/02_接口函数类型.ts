/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-30 10:15:39
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 10:36:16
 */

 // 为了使用接口表示函数的类型，我们需要给接口定义一个调用签名
 // 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型
 (() => {
    // 函数类型：通过接口的方式作为函数的类型来使用

    // 定义一个接口，用作为某个函数的类型使用
    interface ISearchFunc {
        (source:string, subString:string): boolean
    }
    // 定义一个函数，该类型就是上面定义的接口
    const searchString: ISearchFunc = function(source:string, subString:string): boolean {
        // 在source字符串中查找subString
        return source.search(subString) > -1
    }
    console.log(searchString('123', '1'))
 })()