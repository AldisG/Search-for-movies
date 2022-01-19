export const removeTags = (value: string): string => {
  const regex = /(<([^>]+)>)/ig;
  return value.replace(regex, '')
}
export const shortenSummaryParagraph = (text: string, showGrid: boolean) => {
  if (text) {
    removeTags(text)
    const maxNum: number = showGrid ? 44 : 200
    return String(removeTags(text)).substring(0, maxNum) + "..."
  }
  return "No description"
}

export const determineImageSize = (showMediumImg: boolean, medium?: string, original?: string): string => {
  if (medium && original) {
    if (showMediumImg) {
      return medium
    }
    return original
  }
  return 'No image to display'
}