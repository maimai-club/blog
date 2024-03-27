import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import PostFooter from './PostFooter.vue'
import PostHeader from './PostHeader.vue'
import { useData } from 'vitepress'
import './tailwind.postcss'

export default {
  extends: DefaultTheme,
  Layout () {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => {
        const { page } = useData()
        if (page.value.relativePath.match(/^articles\/(?!index.md)/)) {
          return h(PostHeader)
        }
      },
      'doc-after': () => {
        const { page } = useData()
        if (page.value.relativePath.match(/^articles\/(?!index.md)/)) {
          return h(PostFooter)
        }
      }
    })
  }
}
