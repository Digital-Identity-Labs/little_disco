const app_defaults = {
  app_name: 'LittleDisco',
  service_title: 'Little Disco',
  app_url: '/',
  notice: 'Copyright Digital Identity Ltd 2024',
  show_sponsors: true,
  theme: 'default',
  destination_mode: 'list',
  index_mode: 'menu',
  index_redirection_url: null,
  simple_menu: true,
  simple_selector: false,
  show_settings: true,
  em_default: false,
  use_plausible: false,
  plausible_domain: null,
  use_appsignal: false,
  appsignal_key: null,
  request_geo: true,
  geo_distance: 50000,
  fuzzy_search: 0.0,
  max_results: 6,
  max_favourites: 6,
  max_simple: 6,
  max_menu: 6,
  cdc_domain: null,
  cdc_read: false,
  cdc_write: false,
  verification_policy: 'strict',
  origins_only: [],
  destinations_only: [],
  menu_only: [],
  destinations: [
    {
      id: 'https://sho.digitalidentitylabs.com/shibboleth',
      name: 'Sho',
      description: 'A modern test SP for showing attributes',
      logo_url: 'https://sho.digitalidentitylabs.com/sho_logo.png',
      login_urls: ['https://sho.digitalidentitylabs.com/Shibboleth.sso/Login'],
      return_urls: ['https://sho.digitalidentitylabs.com/Shibboleth.sso/Login'],
      privacy_url: 'https://sho.digitalidentitylabs.com/privacy',
      info_url: null,
      org_name: 'Digital Identity Ltd',
      org_url: 'https://digitalidentity.co.uk'
    },
    {
      id: 'https://test.ukfederation.org.uk/entity',
      name: 'UK federation Test SP',
      description: 'This test service provider allows you to see the attributes your identity provider is releasing.',
      logo_url: 'https://test.ukfederation.org.uk/images/ukfedlogo.jpg',
      login_urls: ['https://test.ukfederation.org.uk/Shibboleth.sso/Login'],
      return_urls: ['https://test.ukfederation.org.uk/Shibboleth.sso/Login'],
      privacy_url: 'https://www.ukfederation.org.uk/content/Documents/TestSPPrivacyPolicy',
      info_url: 'https://www.ukfederation.org.uk/content/Documents/TestSPHome',
      org_name: 'JISC',
      org_url: 'https://www.jisc.ac.uk'
    }
  ],
  origins: [
    {
      id: 'https://indiid.net/idp/shibboleth',
      name: 'Indiid',
      description: 'An independent identity provider',
      logo_url: 'https://indiid.net/assets/images/logo-compact-medium.png',
      ip_hints: [],
      domain_hints: ['indiid.net'],
      geo_hints: ['53.48095, -2.23743'],
      keywords: ['guest'],
      hide: true,
    },
    {
      id: 'https://test-idp.ukfederation.org.uk/idp/shibboleth',
      name: 'UK Federation Test IdP',
      description: 'A test IdP for use by UK federation members for testing their SPs',
      logo_url: 'https://test-idp.ukfederation.org.uk/idp/images/ukfedlogo.jpg',
      ip_hints: [],
      domain_hints: [],
      geo_hints: [],
      keywords: ['test'],
      hide: false,
    }
  ],
  mdq_provider_type: 'none',
  mdq_provider_url: null,
  logo_provider_type: 'none',
  logo_provider_url: null,
  net_provider_type: 'header',
  net_provider_url: '/',
  menu_provider_type: 'builtin',
  menu_provider_url: null,
  dest_provider_type: 'builtin',
  dest_provider_url: null,
  origin_provider_type: 'builtin',
  origin_provider_url: null,
  default_image_url: 'theme/default_logo.png',
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
      { text: 'Sponsored by Mimoto Ltd', url: 'https://mimoto.co.uk' }
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
