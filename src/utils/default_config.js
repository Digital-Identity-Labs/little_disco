const app_defaults = {
  app_name: 'LittleDisco',
  app_url: '/',
  notice: 'Copyright Digital Identity Ltd 2023, 2024',
  show_sponsors: true,
  theme: 'default',
  mode: 'default',
  backend: 'static',
}

const modes = {
  default: {
    id: 'default'
  }
}

const themes = {
  default: {
    service_title: 'LittleDisco Demo',
    footer_links: [
      {text: 'Sponsored by Mimoto Ltd', url: 'https://mimoto.co.uk'}
    ]
  }
}

function merge(config) {
  return Object.assign(app_defaults,
    modes[config['mode'] || app_defaults['mode']],
    themes[config['theme'] || app_defaults['theme']],
    config)
}

export { merge }
