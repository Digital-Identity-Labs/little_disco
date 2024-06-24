const app_defaults = {
  app_name: 'LittleDisco',
  service_title: 'Little Disco',
  app_url: '/',
  notice: 'Copyright Digital Identity Ltd 2023, 2024',
  show_sponsors: true,
  theme: 'default',
  mode: 'default',
  destination_mode: 'list',
  origin_mode: 'simple',
  request_geo: true,
  destinations: [
    {
      id: 'https://sho.digitalidentitylabs.com/shibboleth',
      name: 'Sho',
      description: 'A modern test SP for showing attributes',
      logo_url: 'https://sho.digitalidentitylabs.com/sho_logo.png',
      login_url: 'https://sho.digitalidentitylabs.com/Shibboleth.sso/Login',
      return_url: 'https://sho.digitalidentitylabs.com/Shibboleth.sso/Login',
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
      login_url: 'https://test.ukfederation.org.uk/Shibboleth.sso/Login',
      return_url: 'https://test.ukfederation.org.uk/Shibboleth.sso/Login',
      privacy_url: 'https://www.ukfederation.org.uk/content/Documents/TestSPPrivacyPolicy',
      info_url: 'https://www.ukfederation.org.uk/content/Documents/TestSPHome',
      org_name: 'JISC',
      org_url: 'https://www.jisc.ac.uk'
    }
  ],
  origins: [
    {
      id: 'https://shib.manchester.ac.uk/shibboleth',
      name: 'The University of Manchester',
      scopes: 'manchester.ac.uk',
      description: 'The University of Manchester',
      logo_url: 'https://beta.login.manchester.ac.uk/disco/logo-80x34-ltd.png',
      ip_hints: ['130.88.0.0/16'],
      domain_hints: ['manchester.ac.uk'],
      geo_hints: ['53.465624,-2.233193', '53.474881,-2.233593', '53.236237,-2.306421', '53.480372,-2.24893', '51.572576,-1.315923', '53.462436,-2.227711', '53.429749,-2.230049', '53.445089,-2.278115', '53.490592,-2.28839', '53.487545,-2.323424', '53.427332,-2.247825', '46.23145,6.050119'],
      keywords: []
    },
    {
      id: 'https://beta.shib.manchester.ac.uk/shibboleth',
      name: 'The University of Manchester (Beta)',
      scopes: 'manchester.ac.uk',
      description: 'The University of Manchester',
      logo_url: 'https://beta.login.manchester.ac.uk/disco/logo-80x34-ltd.png',
      ip_hints: ['130.88.0.0/16'],
      domain_hints: ['manchester.ac.uk'],
      geo_hints: ['53.465624,-2.233193', '53.474881,-2.233593', '53.236237,-2.306421', '53.480372,-2.24893', '51.572576,-1.315923', '53.462436,-2.227711', '53.429749,-2.230049', '53.445089,-2.278115', '53.490592,-2.28839', '53.487545,-2.323424', '53.427332,-2.247825', '46.23145,6.050119'],
      keywords: []
    }
  ],
  df_provider_type: 'none',
  df_provider_url: null,
  md_provider_type: 'none',
  md_provider_url: null,
  logo_provider_type: 'none',
  logo_provider_url: null
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
