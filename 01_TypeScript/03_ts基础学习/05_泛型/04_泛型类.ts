(() => {
    // 定义一个类，类中的属性值的类型是不确定，方法中共的参数及返回值的类型也是不确定
    // 定义一个泛型类
    class GenericNumber<T> {
        defaultValue: T
        add: (x: T, y: T) => T
    }

    // 在实例化类的对象的时候，再确定泛型的类型
    const g1:GenericNumber<number> = new GenericNumber<number>()
    // 设置属性值
    g1.defaultValue = 100
    g1.add = function (x, y) {
        return x + y
    }
    console.log(g1.add(10, 20))


    // 在实例化类的对象的时候，再确定泛型的类型
    const g2:GenericNumber<string> = new GenericNumber<string>()
    // 设置属性值
    g2.defaultValue = '100'
    g2.add = function (x, y) {
        return x + y
    }
    console.log(g2.add('小猪', 'pig'))
})()