<script lang="ts" setup>
import { data as articles } from '../entries.data.ts'
const newArticles = [...articles]// .reverse().slice(0, 6)
console.log(articles)
console.log(newArticles)
</script>

<template>
  記事一覧だよ☆
  <ul>
    <li
      v-for="(article, idx) in newArticles"
      :key="idx"
    >
      <span v-if="article.frontmatter.title">{{ article.frontmatter.title }}</span>
    </li>
  </ul>
</template>
