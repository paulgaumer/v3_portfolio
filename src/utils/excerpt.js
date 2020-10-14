export const excerpt = (text = "", characters = 200) => {
  return `${text.substring(0, characters)}...`
}
