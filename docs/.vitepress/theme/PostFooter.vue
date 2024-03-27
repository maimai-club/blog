<script lang="ts" setup>
import { usePrevNext } from './PrevNext'

const control = usePrevNext()
</script>

<template>
  <div class="post-footer-container">
    <div class="prev-next">
      <div class="pager">
        <a v-if="control.prev?.link" class="pager-link prev" :href="control.prev?.link">
          <span class="desc">新しい記事</span>
          <span class="title">{{ control.prev?.text }}</span>
        </a>
      </div>

      <div class="pager" :class="{ 'has-prev': control.prev }">
        <a v-if="control.next?.link" class="pager-link next" :href="control.next?.link">
          <span class="desc">古い記事</span>
          <span class="title">{{ control.next?.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-footer-article-container {
  margin-top: 150px;
}

.post-footer-article-container h2 {
  margin: 48px 0 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 24px;
  letter-spacing: -0.02em;
  line-height: 32px;
  font-size: 24px;
  position: relative;
  font-weight: 600;
  outline: none;
}

.post-footer-article-container ul {
  list-style: disc;
}

.post-footer-article-container ul,
.post-footer-article-container ol {
  padding-left: 1.25rem;
  margin: 16px 0;
}

.post-footer-article-container li+li {
  margin-top: 8px;
}

.post-footer-container {
  margin-top: 64px;
}

.post-footer-container .edit-info {
  padding-bottom: 18px;
}

@media (min-width: 640px) {
  .post-footer-container .edit-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
  }
}

.post-footer-container .edit-link-button {
  display: flex;
  align-items: center;
  border: 0;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition: color 0.25s;
}

.post-footer-container .edit-link-button:hover {
  color: var(--vp-c-brand-dark);
}

.post-footer-container .edit-link-icon {
  margin-right: 8px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.post-footer-container .prev-next {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}

@media (min-width: 640px) {
  .post-footer-container .prev-next {
    display: flex;
  }
}

.post-footer-container .pager.has-prev {
  padding-top: 8px;
}

@media (min-width: 640px) {
  .post-footer-container .pager {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 50%;
  }

  .post-footer-container .pager.has-prev {
    padding-top: 0;
    padding-left: 16px;
  }
}

.post-footer-container .pager-link {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 11px 16px 13px;
  width: 100%;
  height: 100%;
  transition: border-color 0.25s;
}

.post-footer-container .pager-link:hover {
  border-color: var(--vp-c-brand);
}

.post-footer-container .pager-link.next {
  margin-left: auto;
}

.post-footer-container .desc {
  display: block;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.post-footer-container .title {
  display: block;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition: color 0.25s;
}
</style>