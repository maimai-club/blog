---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
prev: false
next: false
title: 'トップページ'
---

<script setup>
  import ArticleList from '.vitepress/components/ArticleList.vue'
  import { data as articles } from '.vitepress/articles.data'
</script>

# 新着記事

<ArticleList :articles="articles"/>
