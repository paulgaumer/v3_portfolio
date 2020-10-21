/**
 * Returns a truncated version of the text passed to it
 */
export const excerpt = (text: string, characters: number = 200) => {
  return `${text.substring(0, characters)}...`
}
