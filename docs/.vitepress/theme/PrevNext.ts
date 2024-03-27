import { computed } from 'vue'
import { data as articles, Article } from '../articles.data'
import { useData } from 'vitepress'

export function usePrevNext () {
  const { page } = useData()
  const sorted = [...articles].sort((a, b) => {
    return -(new Date(a.date).getTime() - new Date(b.date).getTime())
  })
  return computed(() => {
    let prev: Article | null = null
    let next: Article | null = null

    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].relativePath === page.value.relativePath) {
        if (i >= 1) {
          prev = sorted[i - 1]
        }
        if (i <= sorted.length - 2) {
          next = sorted[i + 1]
        }
        break
      }
    }

    return {
      prev: {
        text: prev?.title,
        link: prev?.url
      },
      next: {
        text: next?.title,
        link: next?.url
      }
    }
  })
}
