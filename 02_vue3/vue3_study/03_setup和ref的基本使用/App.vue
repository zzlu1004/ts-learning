<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  // 需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化

  // vue2的方式实现

  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   updateCount() {
  //     this.count++
  //   }
  // }

  // vue3的方式实现

  setup() {
    console.log('第一次')
    // let count = 0 // 此时的数据并不是响应式的数据
    // ref是一个函数，作用：定义一个响应式的数据， 返回的是一个ref对象，对象中有个value属性，如果需要对数据惊醒操作，需要使用该ref对象调用value属性的方式进行数据的操作
    // html 模板中是不需要使用.value属性的写法
    // ref 一般用来定义一个基本类型的响应式数据
    const count = ref(0)
    function updateCount() {
      // 报错原因：count是一个ref对象，对象是不能进行++的
      // count++
      count.value++
    }
    // 返回一个对象
    return {
      count,
      updateCount
    }
  }

});
</script>

