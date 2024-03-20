import { createContentLoader } from 'vitepress'

export default createContentLoader('articles/*.md', { includeSrc: true })   // docsからの相対パスを指定する
