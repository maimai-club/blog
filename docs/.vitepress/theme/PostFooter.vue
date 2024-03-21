<script lang="ts" setup>
import { usePrevNext } from './PrevNext'

const control = usePrevNext()
</script>

<template>
  <div>
    <div class="prev-next">
      <div class="pager">
        <a v-if="control.prev?.link" class="pager-link prev" :href="control.prev?.link">
          <span class="desc">Previous page</span>
          <span class="title" v-html="control.prev?.text"></span>
        </a>
      </div>

      <div class="pager" :class="{ 'has-prev': control.prev }">
        <a v-if="control.next?.link" class="pager-link next" :href="control.next?.link">
          <span class="desc">Next page</span>
          <span class="title" v-html="control.next?.text"></span>
        </a>
      </div>
    </div>
  </div>
</template>