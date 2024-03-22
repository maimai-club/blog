<script lang="ts" setup>
import { withBase } from 'vitepress'
import { Article, data as articles } from '../articles.data'
const newArticles: Article[] = [...articles]// .reverse().slice(0, 6)
console.log(articles)
console.log(newArticles)
</script>

<template>
  <div>
    <h1>記事一覧だよ☆</h1>
    <ul>
      <li
        v-for="(article, idx) in newArticles"
        :key="idx"
      >
        <p v-if="article.title">
          タイトル：<a :href="withBase(article.url)">{{ article.title }}</a>
        </p>
        <p v-if="article.author">
          著者：{{ article.author }}
        </p>
        <p>
          タグ：<span
            v-for="(tag, idx2) in article.tags"
            :key="idx2"
          >{{ tag }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
