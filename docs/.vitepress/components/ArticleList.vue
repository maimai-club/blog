<script lang="ts" setup>
import { ContentData, withBase } from 'vitepress'
import { data as articles } from '../articles.data.ts'
const newArticles: ContentData[] = [...articles]// .reverse().slice(0, 6)
console.log(articles)
console.log(newArticles)
</script>

<template>
  <div>
    <h1>記事一覧だよ☆</h1>
    <ul>
      <li v-for="(article, idx) in newArticles" :key="idx">
        <p v-if="article.frontmatter.title">タイトル：<a :href="withBase(article.url)">{{ article.frontmatter.title }}</a></p>
        <p v-if="article.frontmatter.author">著者：{{ article.frontmatter.author }}</p>
        <p>タグ：<span v-for="(tag, idx2) in article.frontmatter.tags" :key="idx2">{{ tag }}</span></p>
      </li>
    </ul>
  </div>
</template>
