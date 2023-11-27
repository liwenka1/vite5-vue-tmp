<template>
  <span>home</span>
  <div><a-input-number id="inputNumber" v-model:value="count" />当前值：{{ count }}</div>
  <a-button type="primary" @click="handleClick">点我++</a-button>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../../store/useCounter'

const store = useCounterStore()
const { setCount } = store
const { count } = storeToRefs(store)
const handleClick = () => {
  setCount()
}
</script>

<style lang="scss" scoped></style>
