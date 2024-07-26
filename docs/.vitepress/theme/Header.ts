import { computed } from 'vue'
import { useData } from 'vitepress'

export function useHeader() {
  const { page } = useData()
  return computed(() => {
    return {
      title: page.value.title,
      author: page.value.frontmatter.author,
      date: page.value.frontmatter.date,
      formatedDate: new Date(page.value.frontmatter.date).toLocaleDateString('ja-JP',{
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }),
      tags: page.value.frontmatter.tags
    }
  })
}