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

A very simple Docker file is included

* Build a Docker image with `docker build -t little_disco ./`
* Run the image with `docker run -p 8080:80 little_disco`

## Configuration

By default Little Disco will happily run with its built-in lists of SPs and IdPs but this is almost certainly not what you want.
There are lots of configuration options to make it fit your context.

Various features have a choice of "provider", often with a groups of settings following the pattern `thing_provider_type`
and `thing_provider_url`. Little Disco is a client-side app so there are no passwords.

### The index/root page

#### Show an error

#### Redirect away

#### As a service menu

### The WAYF/Disco selection page

#### Simple mode

#### As a full UI

### Passive Discovery



### Destinations



### Origins

TBC

### Menu items

### Logos

### Suggestions

#### Using Geolocation Hints

#### Using Network Hints

#### Using Cookies

### Expert Mode

### Reporting usage and errors

### Search

### Themes

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
