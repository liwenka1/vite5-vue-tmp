<template>
  <svg class="svg-icon" aria-hidden="true" :style="style">
    <use :href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue'

const { prefix, name, size } = defineProps({
  prefix: {
    type: String,
    default: 'svg-icon'
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 16
  }
})
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
