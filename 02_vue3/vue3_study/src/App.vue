<template>
  <h2>reactive的使用</h2>
  <h3>姓名：{{ user.name }}</h3>
  <h3>年龄：{{ user.age}}</h3>
  <h3>性别：{{ user.gender}}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据
  setup() {
    // const obj: any = { // 解决 obj.gender = '男' 错误提示
    const obj = {
      name: '小明',
      age: 20,
      wife: {
        name: '小甜甜',
        age: 18,
        cars: ['奔驰', '宝马', '奥迪']
      }
    }
    // 把复杂数据变成响应式数据
    // 返回的是一个Proxy的代理对象，被代理的目标对象就是obj对象
    // user现在是代理对象，obj是目标对象
    const user = reactive<any>(obj)
    console.log(user)

    // 方法
    const updateUser = () => {
      // user.name += '=='
      // // 直接修改目标对象中的属性，视图不会更新
      // // obj.name += '=='
      // user.age += 2
      // user.wife.name +='=='
      // user.wife.cars[0] ='玛莎拉蒂'

      // user ----> 代理对象， obj ----> 目标对象

      // user对象或者obj对象添加一个新的属性，哪一种方式会影响界面的更新
      // obj.gender = '男' // 这种方式视图没有更新
      user.gender = '男' // 这种方式，视图可以更新，而且这个数据最终也添加到目标对象obj中

      // user对象或者obj对象中移除一个已经存在的属性，哪一种方式会影响界面的更新
      // delete obj.age
    }
    return {
      user,
      updateUser
    }
  },
});
</script>

