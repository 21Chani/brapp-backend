export function propertyToPortuguese(sequence: string) {
  const translate = {
    image: 'imagem',
    description: 'descrição',
    category: 'categoria',
    name: 'nome',
  }
  type options = keyof typeof translate
  return translate[sequence as options] || sequence
}
