import React from 'react'

interface PlaceholderConfig {
  [key: string]: string
}

export function parsePlaceholders(
  text: string,
  placeholders: PlaceholderConfig,
  highlightedTerms: string[] = []
): React.ReactNode[] {
  let result: React.ReactNode[] = []
  let lastIndex = 0
  const placeholderRegex = /\{(\w+)\}/g
  let match

  const placeholderMatches: Array<{ start: number; end: number; key: string }> = []

  const matchRegex = new RegExp(placeholderRegex)
  while ((match = matchRegex.exec(text)) !== null) {
    placeholderMatches.push({
      start: match.index,
      end: match.index + match[0].length,
      key: match[1]
    })
  }

  placeholderMatches.forEach((placeholder, index) => {
    const textBefore = text.slice(lastIndex, placeholder.start)
    
    result.push(...processTextWithHighlights(textBefore, highlightedTerms))
    
    const replacementValue = placeholders[placeholder.key] || ''
    result.push(
      <span key={`placeholder-${index}`} className="highlight">
        {replacementValue}
      </span>
    )

    lastIndex = placeholder.end
  })

  const remainingText = text.slice(lastIndex)
  result.push(...processTextWithHighlights(remainingText, highlightedTerms))

  return result.filter(node => node !== '' && node !== null)
}

function processTextWithHighlights(
  text: string,
  highlightedTerms: string[]
): React.ReactNode[] {
  if (!text) return []
  if (highlightedTerms.length === 0) return [text]

  let parts: React.ReactNode[] = []
  let lastIndex = 0

  const regex = new RegExp(`(${highlightedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  let match

  while ((match = regex.exec(text)) !== null) {
    const textBefore = text.slice(lastIndex, match.index)
    if (textBefore) parts.push(textBefore)

    parts.push(
      <span key={`highlight-${match.index}`} className="highlight">
        {match[0]}
      </span>
    )

    lastIndex = regex.lastIndex
  }

  const remainingText = text.slice(lastIndex)
  if (remainingText) parts.push(remainingText)

  return parts
}
