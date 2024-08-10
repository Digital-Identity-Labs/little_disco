# Little Disco - A Simple SAML Discovery / WAYF Service

Little Disco is a small, lightweight [SAML](https://en.wikipedia.org/wiki/SAML_2.0) Discovery Service (sometimes called a "WAYF", or Where Are You From service). 
It allows someone to choose which institution's Identity Provider (IdP) to use when logging into a federated service. 
This is very useful when a service is part of a large academic federation with thousands of organisations, but Little Disco
is also able to present a simpler UI for smaller business or research federations.

Little Disco can be used used with any Shibboleth Service Provider that supports the OASIS
[Identity Provider Discovery Service
Protocol and Profile](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-idp-discovery.pdf) standard, such as the
[Shibboleth SP](https://shibboleth.atlassian.net/wiki/spaces/SP3/overview), [SimpleSAMLphp](https://simplesamlphp.org) and [Satosa](https://github.com/IdentityPython/SATOSA)

Little Disco also includes a simple service menu that presents a list of services, with optional special login requests such
as MFA, SFA, passive and forced authentication. This menu is particularly useful when testing integration with service
providers.

Little Disco's notable features for users:

  - Simple, fast, clear user interface with familiar layout
  - Suggestions for new users based on IP addresses, geo-location, shared cookies and other hints
  - Integrated search with fuzziness and weighting to help find IdPs
  - Passive Discovery for when you don't want show a user interface at all
  - Optional service menu to help users access or test certain services
  - Simplified UI for business and research and niche contexts
  - Can easily show hidden IdPs (which are not needed by most users but are sometimes needed for testing)

Little Disco's notable features for system administrators:

- Easy installation and configuration - just copy the files to a web server
- Runs entirely on the user's browser, so easy to scale
- Clean modern code written with the popular VueJS framework
- Does not rely on CrossDomain behaviour, iframes or other cleverness
- Can be entirely static: no backend service is required. No PHP or Java. No MDQ services. Just a few scripts.
- By default will properly verify return URLs to prevent open-redirection issues, but also has a best-effort 'lax' mode
  for when data is lacking, and a 'risky' mode if you want to live dangerously
- But admins have options: various backends and data formats are supported
- Uses new uDisco data format: much smaller and faster than the usual DiscoFeed files (16K vs 1.5M, for example)
- With automation it is easy to create many simple managed instances for contexts like SaaS
- Integrated, optional clients for [Plausible](https://plausible.io) (simple privacy-safe view counters) and 
  [AppSignal](https://appsignal.com) (service error alerts)
- Installation and support is available from [Mimoto](https://mimoto.co.uk)
- It's possible to extend Little Disco's functionality with additional backends, some of which will be available commercially
  from [Mimoto](https://mimoto.co.uk)

## Live Demo 

There is a live demo of Little Disco's service page at [https://littledisco.digitalidentitylabs.com](https://littledisco.digitalidentitylabs.com)

You can see Little Disco's disco page in action by access [Sho](https://sho.digitalidentitylabs.com) (Your institution 
may not have metadata for Sho yet, so don't expect to actually login)

## Installation

A basic install of Little Disco, using the default destinations (SPs) and origins (IdPs) only involves unpacking an archive
and uploading/copying files into place on a web server.

### Using a Github Release

  * Unpack the archive
  * Copy index.html and assets to the public files directory for your web server or vhost
  * Make sure there is a file called ld_config.json in public files directory, containing `{}`

### Building and running locally 

  * Clone [this Github repository](https://github.com/Digital-Identity-Labs/little_disco)
  * Have a recent Node.js installed
  * `npm install`
  * `npm run dev` to run a local copy
  * `npm run build --production` to build files to install on your server

### As a Docker container

A very simple, unconfigured Docker file is included - you should customise it or mount a configuration file in it.

* Build a Docker image with `docker build -t little_disco ./`
* Run the image with `docker run -p 8080:80 little_disco`
* Connect on http://localhost:8080/ to see the index menu or http://localhost:8080/?entityID=https%3A%2F%2Fsho.digitalidentitylabs.com%2Fshibboleth
  to see the Discovery service

## Configuration

By default Little Disco will happily run with its built-in lists of SPs and IdPs but this is almost certainly not what you want.
There are lots of configuration options to make it fit your context.

Various features have a choice of "provider", often with a groups of settings following the pattern `thing_provider_type`
and `thing_provider_url`. Little Disco is a client-side app so there are no passwords.

Configuration options should be put in a file called `ld_config.json` next to the `index.html` file for Little Disco.
It is a public file, so please *do not put any passwords in it*.

### The index/root page

Little Disco includes an optional menu page of services that appears when no entity is specified.

Modes:
  * menu: displays a menu of services, with links to more information and buttons to log in to them
  * redirect: redirects the web browser to the URL specified with `index_redirection_url`
  * error: displays an error page (this is the expected behaviour for other, similar services)

Providers:
  * builtin: use the origins list in the configuration file

Options:
  * `index_mode`: select the mode. Defaults to "menu"
  * `index_redirection_url`: The URL to be redirected to if in redirect mode
  * `simple_menu`: set to true to for a simplified menu. (This is not implemented yet)
  * `menu_provider_type`: the name of the provider, defaults to builtin,
  * `menu_provider_url`: the URL of the provider's data (not needed for builtin)
  * `max_menu`: the maximum number of SPs to show on the menu 

#### Examples

Show a simple menu
```json
{
  "index_mode": "menu",
  "menu_provider_type": "builtin",
  "destinations": [
    {
      "id": "https://sho.digitalidentitylabs.com/shibboleth",
      "name": "Sho",
      "description": "A modern test SP for showing attributes",
      "logo_url": "https://sho.digitalidentitylabs.com/sho_logo.png",
      "login_urls": ["https://sho.digitalidentitylabs.com/Shibboleth.sso/Login"],
      "return_urls": ["https://sho.digitalidentitylabs.com/Shibboleth.sso/Login"],
      "privacy_url": "https://sho.digitalidentitylabs.com/privacy",
      "info_url": null,
      "org_name": "Digital Identity Ltd",
      "org_url": "https://digitalidentity.co.uk"
    },
    {
      "id": "https://test.ukfederation.org.uk/entity",
      "name": "UK federation Test SP",
      "description": "This test service provider allows you to see the attributes your identity provider is releasing.",
      "logo_url": "https://test.ukfederation.org.uk/images/ukfedlogo.jpg",
      "login_urls": ["https://test.ukfederation.org.uk/Shibboleth.sso/Login"],
      "return_urls": ["https://test.ukfederation.org.uk/Shibboleth.sso/Login"],
      "privacy_url": "https://www.ukfederation.org.uk/content/Documents/TestSPPrivacyPolicy",
      "info_url": "https://www.ukfederation.org.uk/content/Documents/TestSPHome",
      "org_name": "JISC",
      "org_url": "https://www.jisc.ac.uk"
    }
  ]
}
```

Redirect to documentation
```json
{
  "index_mode": "redirect",
  "index_redirection_url": "https://example.com/how_to_use_this_service"
}
```

Show an error
```json
{
  "index_mode": "error"
}
```

### The WAYF/Disco selection page

This is the main purpose of Little Disco. It allows users to select their IdP and be redirected back to the SP they
wish to access.

Modes:
  * simple: a static list of predefined IdPs is shown.
  * full: a standard UI that can cope with many IdPs

Options:
  * `simple_selector`: setting to true enables simple mode. If set to false, the full UI will be shown
  * `origins`: a list of origin records (IdPs) for use by the "builtin" provider
  * `origin_provider_type`: sets the provider type
  * `origin_provider_url`: the location of provider data
  * `origins_only`: a list of entityIDs to use, a subset of what the provider contains
  * `fuzzy_search`: a floating point number to control the fuzziness of searches. Defaults to 0.0 (none)
  * `max_results`: The maximum number of search results to show
  * `max_favourites`: The maximum number of favourites to remember
  * `max_simple`: how many IdPs to show in simple mode
  * `verification_policy`: strict, lax or risky. See below for more information.
  * `request_geo:` true or false. Should the user be asked for their location?
  * `geo_distance`: distance in metres that is considered nearby, defaults to 50000
  * `cdc_domain:`: domain to use for hint cookie. Defaults to null 
  * `cdc_read`: should the CDC cookie be read, and used for suggestions? Defaults to false
  * `cdc_write`: should the CDC cookie be written, maybe for use elsewhere. Defaults to false
  * `net_provider_type`: network information provider type
  * `net_provider_url`:  network information provider data location

#### Examples

...

### Passive Discovery

Little Disco support Passive Discovery: if requested by the SP, no UI will be shown to the user. If an IdP has been
used recently it will automatically be returned to the SP, and the user should see very little to indicate they were
using Little Disco. If no IdP has been selected previously the user is still redirected back to the SP, and the SP can
decide how to proceed.


### Origins

Origins include SAML IdPs - they are the services users authenticate with while trying to access destinations (SPs)

Little Disco supports a variety of different file formats and data sources for destinations.

#### Provider: Builtin

This is a simple list of IdPs that's inside the main configuration file. It's useful when you have a small, static list
of known IdPs, and particularly when using simple mode. You do not need any additional software. However, it is a
very bad choice for general-purpose discovery services.

The builtin provider uses the "origins" field in the main configuration file to store a list of records.

Here is an example:
```json
{
"origin_provider_type": "builtin",
"origins": [
{
"id": "https://indiid.net/idp/shibboleth",
"name": "Indiid",
"description": "An independent identity provider",
"logo_url": "https://indiid.net/assets/images/logo-compact-medium.png",
"ip_hints": [],
"domain_hints": ["indiid.net"],
"geo_hints": ["53.48095, -2.23743"],
"keywords": ["guest"],
"hide": false
},
{
"id": "https://test-idp.ukfederation.org.uk/idp/shibboleth",
"name": "UK Federation Test IdP",
"description": "A test IdP for use by UK federation members for testing their SPs",
"logo_url": "https://test-idp.ukfederation.org.uk/idp/images/ukfedlogo.jpg",
"ip_hints": [],
"domain_hints": [],
"geo_hints": [],
"keywords": ["test"],
"hide": false
}
]}
```

#### Provider: Disco

The Shibboleth SP, other SPs, and other discovery services use the Disco format to list available IdPs.

This data can be used by Little Disco too. It has the advantage of being widely used and stable, but is possibly inefficient.

If you have a Shibboleth SP then disco data may be available at `/Shibboleth.sso/DiscoFeed`. Smee, PyFF and
Shibboleth Metadata Aggregator can also produce Disco data.

If using Smee you can convert a normal federation metadata file to Disco JSON like this:
```elixir
Smee.source("http://metadata.ukfederation.org.uk/ukfederation-metadata.xml")
|> Smee.fetch!()
|> Smee.Metadata.stream_entities()
|> Smee.Publish.write_aggregate(format: :disco, to: "output")
```

An example configuration:
```json
{
"origin_provider_type": "disco",
"origin_provider_url": "/data/disco.json"
}
```

#### Provider: uDisco
uDisco is a new format created for Little Disco. It aims to be similar to the Disco format but simpler and smaller.

uDisco filters out data URLs for logos and contains only one language - localisation is achieved by creating multiple
localised files and selecting the best match. Files are often 15% to 25% the size of regular disco files when all fields
are included, but file sizes can be reduced further by omitting optional fields.

The only software currently able to create uDisco files is Smee. Here's an example snippet:
```elixir
Smee.source("http://metadata.ukfederation.org.uk/ukfederation-metadata.xml")
|> Smee.fetch!()
|> Smee.Metadata.stream_entities()
|> Smee.Publish.write_aggregate(format: :udisco, to: "output")
```

An example configuration:
```json
{
"origin_provider_type": "udisco",
"origin_provider_url": "/data/udisco_en.json"
}
```

### Destinations (SPs)

Destinations include SAML SPs - they are the services users actually want to access.

Little Disco supports a variety of different file formats and data sources for destinations.

Destinations are used for the menu, to provide information about the service users are accessing, and to validate the
return addresses of services.

#### Provider: Builtin

#### Provider: uDest


### Menu items

#### Provider: Builtin

### Logos

### Expert Mode

### Reporting usage and errors

### Search

### Themes

* `default_image_url`: the location of an image to use as a placeholder logo for IdPs


### Notes on provider URLs

### Notes on return URL verification

### Configuring your SP

The URL your Little Disco SAML DS service is simply the base URL of where-ever you have installed it, with no additional path.

For example the URL to use for the demo at `https://littledisco.digitalidentitylabs.com` is simply 
`https://littledisco.digitalidentitylabs.com` - if the `entityID` param is present Little Disco switches from showing 
a menu to acting as a discovery service.

* [Shibboleth SP](https://shibboleth.atlassian.net/wiki/spaces/SP3/pages/2065334348/SSO) you need to edit `discoveryProtocol`
  and `discoveryURL`
* [SimpleSAMLphp](https://simplesamlphp.org/docs/stable/saml/sp.html) You need to change the `DiscoURL` setting
* [php-saml-sp](https://www.php-saml-sp.eu/#config) Change the `discoURL` setting

## Caveats

  * As of 2024 this is a new project, there may be bugs. 
  * I'm new to modern Javascript and VueJS, so there might be some active learning going on
  * Multi-language support is planned but not usable yet
  * Tests are currently inadequate
  * The more efficient data formats require your own scripts or the [Smee](https://github.com/Digital-Identity-Labs/smee)
    libraries to generate
  * There is no central store, so Little Disco cannot behave like Seamless Access. 
  * Large federations and a slow internet connection will cause the page to take awhile to load. (For reference, the UK federation on an
  8Mb/s ADSL connection works fine)
  * Little Disco may be slow on older, slow PCs or older phones.
  * As a client side app Little Disco will not work with scripts and non-browser HTTP agents unless they also include JS
    rendering
  * Little Disco has not been audited or tested for accessibility yet

## Alternatives

Little Disco is new, but this sort of software has been around for well over a decade.

  * [Shibboleth Embedded Discovery Service](https://shibboleth.atlassian.net/wiki/spaces/EDS10/overview) A Javascript
  application to use in combination with the Shibboleth SP
  * [Thiss](https://thiss-js.readthedocs.io/en/latest/components.html#oasis-identity-provider-discovery) The discovery
    service used by Seamless Access, enhanced by a centralised persistent favourite store

## References

   * [OASIS Identity Provider Discovery Service Protocol and Profile](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-idp-discovery.pdf)
     This is the standard spec
   * [UK Access Management Federation's docs on discovery](https://www.ukfederation.org.uk/content/Documents/Discovery)
   * [Recommended Practices for Improved Access to Institutionally-Provided Information Resources](https://groups.niso.org/higherlogic/ws/public/download/21376)
     NISO's research and recommendations (some followed, some ignored)

## Development

* Clone [this Github repository](https://github.com/Digital-Identity-Labs/little_disco)
* Have a recent Node.js installed
* `npm install`
* `npm run dev` to run a local copy

You can run test with `npm run test:unit`

You can lint with `npm run lint`

Apparently with [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) your should disable Vetur. I don't know what these are, or why.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Digital-Identity-Labs/mdqt.
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Contributors

* The disco icon is by [Blaise Sewell](https://thenounproject.com/creator/blaisetsewell/) via [Noun Project](https://thenounproject.com/browse/icons/term/disco/) (CC BY 3.0)

## License

Copyright (c) 2024 Digital Identity Ltd, UK

LittleDisco is Apache 2.0 licensed.

The disco icon is (c) [Blaise Sewell]https://thenounproject.com/creator/blaisetsewell/) and is CC BY 3.0 licensed


"origins": [
{
"id": "https://indiid.net/idp/shibboleth",
"name": "Indiid",
"description": "An independent identity provider",
"logo_url": "https://indiid.net/assets/images/logo-compact-medium.png",
"ip_hints": [],
"domain_hints": ["indiid.net"],
"geo_hints": ["53.48095, -2.23743"],
"keywords": ["guest"],
"hide": false,
},
{
"id": "https://test-idp.ukfederation.org.uk/idp/shibboleth",
"name": "UK Federation Test IdP",
"description": "A test IdP for use by UK federation members for testing their SPs",
"logo_url": "https://test-idp.ukfederation.org.uk/idp/images/ukfedlogo.jpg",
"ip_hints": [],
"domain_hints": [],
"geo_hints": [],
"keywords": ["test"],
"hide": false
}