function style(size) {
  switch (size) {
    case 'tiny':
      return 'max-width:16px;width:100%'
    case 'small':
      return 'max-width:32px;width:100%'
    case 'medium':
      return 'max-width:64px;width:100%'
    case 'large':
      return 'max-width:96px;width:100%'
    default:
      return 'max-width:64px;width:100%'
  }
}

export { style }
