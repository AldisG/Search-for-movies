export const removeTags = (value: string): string => {
  const regex = /(<([^>]+)>)/ig;
  return value.replace(regex, '')
}