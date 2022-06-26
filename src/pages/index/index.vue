<template>
  <view class="box">
    <view class="title">按钮类型 {{ a }}</view>
    <nut-button type="default" @click="add">默认按钮</nut-button>
  </view>
</template>

<script>
export default {
  setup() {
    const a = ref(0)
    const add = () => a.value++
    return {
      a,
      add,
    }
  },
}
</script>

<style lang="scss">
.box {
  padding: 0 10px;
}

.title {
  font-size: 32px;
  padding: 16px 0;
}
</style>
