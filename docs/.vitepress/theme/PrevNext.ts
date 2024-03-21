import { computed } from 'vue'
import { data as articles } from '../articles.data'
import { useData, withBase } from 'vitepress'

export function usePrevNext() {
    return computed(() => {
        const { page } = useData()
        let prev = null
        let next = null

        for (let i = 0; i < articles.length; i++) {
            console.log(articles[i].url, page.value.relativePath)
            // TODO: add relativePath https://nshmura.com/posts/migration-to-vitepress/
            if (articles[i].url === page.value.relativePath) {
                if (i >= 1) {
                    next = articles[i - 1];
                }
                if (i <= articles.length - 2) {
                    prev = articles[i + 1];
                }
                break;
            }
        }

        return {
            prev: {
                text: prev?.frontmatter.title,
                link: prev?.url
            },
            next: {
                text: next?.frontmatter.title,
                link: next?.url
            }
        }
    })
}