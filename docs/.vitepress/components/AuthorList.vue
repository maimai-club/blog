<script lang="ts" setup>
import VPFeature from "../../../../../node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue"
import { authors } from '../authors'
</script>

<template>
  <div>
    <div v-for="(author, idx) in authors" :key="idx">
      <VPFeature :title="author.name" :icon="author.icon" :details="author.description" />
    </div>
    <!-- <ul>
      <li v-for="(author, idx) in authors" :key="idx">
        <p v-if="author.name">
          {{ author.name }}
        </p>
      </li>
    </ul> -->
  </div>
</template>
