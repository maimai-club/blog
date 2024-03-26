---
layout: doc
prev: false
next: false
title: '記事一覧'
---

<script setup>
  import ArticleList from '.vitepress/components/ArticleList.vue'
  import { data as articles } from '.vitepress/articles.data'
</script>

# 記事一覧

<ArticleList :articles="articles"/>
