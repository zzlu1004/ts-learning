<template>
  <div>哈哈</div>
  <h1>{{ number }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  // setup 是组合api中第一个要使用的函数
  setup() {
    console.log('setup')
    const number = 10
    return {
      number
    }
  }
});
</script>