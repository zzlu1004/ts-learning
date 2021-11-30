/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-26 13:52:22
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-30 09:53:20
 */

// 基础类型
(() => {
    // 1、布尔类型  ------>boolean

    let flag: boolean = true
    console.log(flag)


    // 2、数字类型   ------>number

    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    console.log(a1, a2, a3, a4)


    // 3、字符串   ------->string

    let str1: string = "床前明月光"
    let str2: string = "疑似地上霜"
    let str3: string = "举头望明月"
    let str4: string = "低头思故乡"
    console.log(str1, str2, str3, str4)

    // 字符串和数字之间能够一起拼接
    let str5: string = "I have "
    let num: number = 1000
    console.log(str5 + num)

    // 总结：ts中变量一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其他类型的数据赋值给当前的这个变量中
    // 如 let str: string = '真香' str = 100，则会报错


    // 4、null和undefined

    let und: undefined = undefined
    let nll: null = null
    console.log(und, nll)
    // null和undefined 都可以作为其他类型的子类型，把undefined 和null 赋值给其他类型的变量，如：number类型的变量
    let num1: number = null
    console.log(num1)


    // 5、数组类型

    // 数组定义方式1
    // let 变量名: 数据类型[] = [值1, 值2, 值3]
    let arr1: number[] = [10, 20, 30, 40]
    // 数组定义方式2：泛型的写法
    // let 变量名: Arra<数据类型> = [值1, 值2, 值3]
    let arr2: Array<number> = [10, 20, 30, 40]
    console.log(arr1, arr2)
    // 注意问题：数组定义后，里面的数据类型，必须和定义数组时类型是一致的，否则有错误提示信息，也不会编译通过


    // 6、元组类型: 在定义数组的时候，类型和数组的长度，一开始就限定好了

    let arr3: [string, number, boolean] = ['小甜甜', 1000, true]
    console.log(arr3[0].split(''))
    console.log(arr3[1].toFixed(2))


    // 7、枚举类型，枚举中每个数据都可以叫做元素，每个元素都有自己的编号，默认从0开始，依次递增

    enum Color{
        red = 1,
        green,
        blue
    }
    let myColor: Color = Color.red
    console.log(myColor, Color.red, Color.blue)
    console.log(Color[3])
    // 小例子 枚举中元素可以是中文数据，但不推荐
    enum Gender {
        女,
        男
    }
    console.log(Gender.男)


    // 8、any类型

    let str:any = 100
    str = "test"
    console.log(str)
    let arr: any[] = [1000, 'test', null, true]
    console.log(arr)
    // 这种情况下也没有报错提示信息，any类型有优点，也有缺点
    // console.log(arr[0].split(''))
    console.log(arr[1].split(''))


    // 9、void类型，在函数声明的时候，小括号的后面使用void，代表的是该函数没有任何的返回值

    function showMsg(): void {
        console.log('test1')
        // return 
        // return undefined
        return null
    }
    showMsg()
    console.log(showMsg())
    // 定义void类型的变量，可以接收一个undefined的值，但是意义不大
    let vd: void = undefined
    console.log(vd)


    // 10、object类型

    // 定义一个函数，参数是object类型，返回值也是object类型
    function getObj(obj: object): object{
        console.log(obj)
        return {
            name: '卡卡西',
            age: 27
        }
    }
    // console.log(getObj({ name: '佐助', age: 29 }))
    console.log(getObj(new String('123')))


    // 11、联合类型 表示取值可以为多种类型中的一种
    
    // 需求1：定义一个函数得到一个数字或者字符串类型
    function getString(str: string | number): string{
        return str.toString()
    }
    console.log(getString(123))
    // 需求2：定义一个函数,得到一个数字或者字符串长度
    function getStringLen(str: string | number): number{
        return str.toString().length
    }
    console.log(getStringLen(1234))


    /*** 类型断言 ***/
    // 类型断言的语法方式1：<类型>变量
    // 类型断言的语法方式2：变量 as <string>
    function getStringLenAs(str: string | number): number{
        // 如果str本身是string类型，那么是没有必要调用soString()方法的
        if ((<string>str).length) {
            return (str as string).length
        } else {
            return str.toString().length
        }
    }
    console.log(getStringLenAs('1234'))


    /*** 类型推断 ***/
    // 在没有类型说明的情况下，会自动根据变量的值推断一个类型
    let txt = 1000 // 推断为number类型
    // txt = 'test'
    console.log(txt)
    
    let txt1 // 推断为any类型
    txt1 = 100
    txt1 = 'test'
    console.log(txt1)

})()

// 布尔 数字 字符串 null undefined 数组 元组 枚举 any void 对象 联合类型