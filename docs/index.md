---
layout: doc
prev: false
next: false
title: 'トップページ'
---

<script setup>
  import ArticleList from '.vitepress/components/ArticleList.vue'
  import { data as articles } from '.vitepress/articles.data'

  const MAX_ARTICLES = 3

  const newArticles = [...articles].sort((a, b) => {
    return -(new Date(a.date).getTime() - new Date(b.date).getTime())
  })
  const countToRemove = newArticles.length > MAX_ARTICLES ? newArticles.length - MAX_ARTICLES : 0
  newArticles.splice(-1 * countToRemove)
</script>

# 新着記事

<ArticleList :articles="newArticles"/>
[もっと見る...](/articles)
