<script lang="ts" setup>
import { useHeader } from './Header'
import { getAuthorById } from '../authors'
const info = useHeader()
const author = getAuthorById(info.value.author)
</script>

<template>
  <div>
    <div class="my-1 flex items-center gap-x-3" v-if="author">
      <img class="rounded-full aspect-square max-h-9" v-if="author.icon" :src="author.icon" />
      <span class="text-xl">{{ author.name }}</span>
    </div>
    <div class="my-2 text-3xl">
      {{ info.title }}
    </div>
    <div class="my-2">
      <span>
        {{ info.formatedDate }}
      </span>
    </div>
    <div class="my-2">
      <span class="mr-2 border border-gray-300 rounded-lg px-2 py-1" v-for="(tag, idx2) in info.tags" :key="idx2">
        {{ tag }}
      </span>
    </div>
  </div>
</template>