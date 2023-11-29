<template>
  <svg class="svg-icon" aria-hidden="true" :style="style">
    <use :href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue'

interface Props {
  prefix?: string
  name: string
  size?: string | number
}

const { prefix = 'svg-icon', name, size = 16 } = defineProps<Props>()
const symbolId = computed((): string => `#${prefix}-${name}`)
const style = computed((): CSSProperties => {
  const s = `${size}`.replace('px', '').concat('px')
  return {
    width: s,
    height: s
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
  overflow: hidden;
  fill: currentcolor;
  vertical-align: -0.15em;
}
</style>
