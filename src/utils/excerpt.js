export const excerpt = (text = "", characters = 295) => {
  return `${text.substring(0, characters)}...`
}
