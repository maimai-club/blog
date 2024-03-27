<script lang="ts" setup>
import { useHeader } from './Header'
const info = useHeader()
</script>

<template>
  <div>
    <span>{{ info.title }}</span>
    <span>{{ info.author }}</span>
    <span>{{ info.date }}</span>
    <span>{{ info.tags }}</span>
  </div>
</template>