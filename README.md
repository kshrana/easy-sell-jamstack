# easy-sell-jamstack
Simple shop with all the comfort but without the burden of any webserver. Powered by the Jamstack-architecture.

# Roadmap
- [ ] Allow customers to sign-in
- [ ] Add shopping-cart
- [ ] Accept payments per Stripe
  * See [Netlify Guide on Stripe integration using Jamstack-architecture](https://www.netlify.com/blog/2020/04/13/learn-how-to-accept-money-on-jamstack-sites-in-38-minutes/) and [Stripe Payments docs](https://stripe.com/docs/payments/accept-a-payment#web)
---

# Deployment
This repo is automatically deployed by Netlify.  
  
Preview-URL: http://easy-sell-jamstack.netlify.app/  
Admin: http://easy-sell-jamstack.netlify.app/admin/

# Architecture
* Static Site: powered by *Gatsby*
* CMS editing functionality: *Netlify CMS* (Open Source :thumbsup:)
    * CMS-Authentication on Github via *Netlify Identity*
* Shopping backend-code: *Netlify Functions*
* Delivery: *Netlify*

# Setup
* This project was bootstrapped by a Gatsby blog-starter: `gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog`

# How to run
## Netlify CMS
### Working with a Local Git Repository
1. Run `npx netlify-cms-proxy-server` from the root directory this repository.
2. Enable the top-level property `local_backend` in the `config.yml` file under `/static/admin`. (Netlify CMS Config-File) as such:
``` yaml
backend:
  name: git-gateway

# when using the default proxy server port
local_backend: true

# when using a custom proxy server port
local_backend:
  url: http://localhost:8082/api/v1
```
