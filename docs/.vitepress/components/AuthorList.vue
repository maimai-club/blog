<script lang="ts" setup>
import { DefaultTheme } from 'vitepress'
import { authors } from '../authors'
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(author, idx) in authors"
        :key="idx"
      >
        <p v-if="author.name">
          {{ author.name }}
        </p>
      </li>
    </ul>
  </div>
</template>
