interface Author {
  id: string,
  name: string,
  icon?: string,
  github?: string,
  twitter?: string,
  instagram?: string,
  description: string
}

const authors: Author[] = [
  {
    id: 'eve68k',
    name: 'EVE:/i',
    icon: 'https://github.com/eve68k.png',
    github: 'https://github.com/eve68k',
    description: 'へんなやつ'
  },
  {
    id: 'rui',
    name: 'rui-puipui',
    icon: 'https://github.com/rui-puipui.png',
    github: 'https://github.com/rui-puipui',
    description: 'へんなやつ'
  }
]

function getAuthorById(id: string): Author | undefined {
  const result = authors.find(author => {
    return author.id === id
  })
  return result
}

export { getAuthorById ,authors }
export type { Author }
