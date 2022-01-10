/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-12-01 19:19:51
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-12-01 19:39:42
 */
// 泛型接口：在定义接口时，为接口中的属性或者方法定义泛型类型，在使用接口时，再指定具体的泛型类型
(() => {
    // 定义一个类，用来存储用户的相关信息(id，名字，年龄)
    // 通过一个类的实例对象调用add的方法，可以添加多个用户信息对象，调用getUserId方法可以根据id获取某个指定的用户信息对象

    // 定义一个泛型接口
    interface IBaseCURD<T>{
        data: Array<T>
        add: (t: T) => T
        getUserId: (id: number) => T
    }

    // 定义一个用户信息的类
    class User{
        id?: number
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    // 定义一个类，可以针对用户的信息对象进行增加及查询的操作
    // CURD ---》create,Read,Update,Delete
    class UserCRUD implements IBaseCURD<User>{
        data: Array<User> = []
        add(user: User): User {
            user.id = Date.now() + Math.random()
            this.data.push(user)
            return user
        }
        getUserId(id: number): User {
            return this.data.find(user => user.id === id)
        }
    }
    const usrCRUD: UserCRUD = new UserCRUD()
    usrCRUD.add(new User('jack', 20))
    usrCRUD.add(new User('tom', 25))
    const {id } = usrCRUD.add(new User('lucy', 23))
    usrCRUD.add(new User('rosi', 21))
    console.log(usrCRUD.data)
    const user = usrCRUD.getUserId(id)
    console.log(user)
})()