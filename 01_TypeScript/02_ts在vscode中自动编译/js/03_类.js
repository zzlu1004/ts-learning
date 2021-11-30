/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-25 15:58:59
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-25 16:06:49
 */
// ts中 书写js中的类，演示效果
(function () {
    // 定义一个类
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    // 定义一个函数
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    var peorson = new Person('诸葛', '孔明');
    console.log(showFullName(peorson));
})();
