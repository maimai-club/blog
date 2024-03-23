import { computed } from 'vue'
import { data as articles, Article } from '../articles.data'
import { useData } from 'vitepress'

export function usePrevNext () {
  const { page } = useData()
  return computed(() => {
    let prev: Article | null = null
    let next: Article | null = null

    for (let i = 0; i < articles.length; i++) {
      if (articles[i].relativePath === page.value.relativePath) {
        if (i >= 1) {
          next = articles[i - 1]
        }
        if (i <= articles.length - 2) {
          prev = articles[i + 1]
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
