<script lang="ts" setup>
import { Article, data as articles } from '../articles.data'
import ArticleCard from './ArticleCard.vue'

const props = defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <div v-for="(article, idx) in props.articles" :key="idx">
    <ArticleCard :article="article" />
  </div>
</template>
