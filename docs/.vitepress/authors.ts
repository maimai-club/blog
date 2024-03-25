interface Author {
  name: string,
  icon?: string,
  github?: string,
  twitter?: string,
  instagram?: string,
  description: string
}

const authors: Author[] = [
  {
    name: 'EVE:/i',
    icon: 'https://github.com/eve68k.png',
    github: 'https://github.com/eve68k',
    description: 'へんなやつ'
  },
  {
    name: 'rui-puipui',
    icon: 'https://github.com/rui-puipui.png',
    github: 'https://github.com/rui-puipui',
    description: 'へんなやつ'
  }
]

export { authors }
export type { Author }
