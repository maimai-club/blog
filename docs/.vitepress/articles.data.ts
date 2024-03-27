import { createContentLoader } from 'vitepress'
import defineConfig from './config.mjs'

interface Article {
  title: string
  url: string
  relativePath: string
  date: number
  formatedDate: string
  author: string
  tags: string[]
  excerpt: string | undefined
}

declare const data: Article[]
export { data }
export type { Article }

export default createContentLoader('articles/**/*.md', { // docsからの相対パスを指定する
  includeSrc: true,
  transform (raw): Article[] {
    return raw.map(({ url, frontmatter, excerpt }) => ({
      title: frontmatter.title,
      url: defineConfig.base + url.replace(/^\/+/, ''),
      relativePath: url.replace(/^\/+/, '').replace(/\.html$/, '') + '.md',
      date: frontmatter.date,
      formatedDate: (frontmatter.date as Date).toLocaleDateString('ja-JP',{
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }),
      author: frontmatter.author,
      tags: frontmatter.tags,
      excerpt
    }))
  }
})
