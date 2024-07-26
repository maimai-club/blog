<script lang="ts" setup>
import VPFeatures, { Feature } from "../../../../../node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue"
import { authors } from '../authors'

const featuredAuthors: Feature[] = []

for (const author of authors) {
  featuredAuthors.push({
    title: author.name,
    icon: author.icon,
    details: author.description
  })
}
</script>

<template>
  <div>
    <VPFeatures :features="featuredAuthors" />
    <!-- <ul>
      <li v-for="(author, idx) in authors" :key="idx">
        <p v-if="author.name">
          {{ author.name }}
        </p>
      </li>
    </ul> -->
  </div>
</template>
