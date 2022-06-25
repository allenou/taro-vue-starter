<template>
  <view class="index">
    <!-- <Counter /> -->
    <div class="flex justify-center">
      <nut-button type="primary">主要按钮</nut-button>
    </div>
    <div class="hello">
      <h1>{{ $t('hello') }}</h1>
      <p v-html="$t('world')"></p>
    </div>
  </view>
</template>

<!-- <script setup>
import './index.scss'
import Counter from '@/components/Counter.vue'


</script> -->
