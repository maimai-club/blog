import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import PostFooter from './PostFooter.vue'
import { useData } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => {
        const { page } = useData()
        console.log(page.value.relativePath)
        return h(PostFooter)
        if (page.value.relativePath.match(/^articles\/(?!index.md)/)) {
          return h(PostFooter)
        }
      }
    })
  }
}
