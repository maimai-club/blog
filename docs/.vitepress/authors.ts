interface Author {
  name: string,
  icon?: string,
  github?: string,
  twitter?: string,
  instagram?: string,
  description?: string
}

const authors: Author[] = [
  {
    name: 'EVE:/i',
    icon: 'https://github.com/eve68k.png',
    github: 'https://github.com/eve68k',
    description: 'へんなやつ'
  }
]

export { authors }
export type { Author }
