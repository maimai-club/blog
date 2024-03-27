import { computed } from 'vue'
import { useData } from 'vitepress'

export function useHeader() {
  const { page } = useData()
  return computed(() => {
    return {
      title: page.value.title,
      author: page.value.frontmatter.author,
      date: page.value.frontmatter.date,
      tags: page.value.frontmatter.tags
    }
  })
}