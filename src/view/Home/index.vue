<template>
  <span>home</span>
  <p>{{ count }}</p>
  <button @click="handleClick">点我++</button>
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
