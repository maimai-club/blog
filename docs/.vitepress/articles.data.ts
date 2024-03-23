import { createContentLoader } from 'vitepress'
import defineConfig from './config.mjs'

interface Article {
  title: string
  url: string
  relativePath: string
  // date: {
  //   time: number
  //   string: string
  // }
  author: string
  tags: string[]
  excerpt: string | undefined
}

declare const data: Article[]
export { data, Article }

export default createContentLoader('articles/*.md', { // docsからの相対パスを指定する
  includeSrc: true,
  transform (raw): Article[] {
    return raw.map(({ url, frontmatter, excerpt }) => ({
      title: frontmatter.title,
      url: defineConfig.base + url.replace(/^\/+/, ''),
      relativePath: url.replace(/^\/+/, '').replace(/\.html$/, '') + '.md',
      author: frontmatter.author,
      tags: frontmatter.tags,
      excerpt
    }))
  }
})
