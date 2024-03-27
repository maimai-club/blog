---
layout: doc
prev: false
next: false
title: '記事一覧'
---

<script setup>
  import ArticleList from '.vitepress/components/ArticleList.vue'
  import { data as articles } from '.vitepress/articles.data'
  articles.sort((a, b) => {
    return -(new Date(a.date).getTime() - new Date(b.date).getTime())
  })
</script>

# 記事一覧

<ArticleList :articles="articles"/>
