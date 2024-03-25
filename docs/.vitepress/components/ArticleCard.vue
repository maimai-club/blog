<script lang="ts" setup>
import { Article } from '../articles.data'
import { Author, getAuthorById } from '../authors'

const props = defineProps<{
  article: Article
}>()

const author: Author = getAuthorById(props.article.author)
</script>

<template>
  <div class="border border-gray-300 rounded-lg my-4">
    <div class="px-7 py-3">
      <div class="my-2 flex items-center gap-x-3" v-if="author.name">
        <img class="rounded-full aspect-square max-h-9" v-if="author.icon" :src="author.icon" />
        <span class="text-xl">{{ author.name }}</span>
      </div>
      <div class="my-2 mb-4 text-3xl" v-if="props.article.title">
        <a :href="props.article.url">{{ props.article.title }}</a>
      </div>
      <div class="my-2">
        <span class="mr-2 border border-gray-300 rounded-lg px-2 py-1" v-for="(tag, idx2) in props.article.tags"
          :key="idx2">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>