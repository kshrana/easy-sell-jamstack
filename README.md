# easy-sell-jamstack
Simple shop with all the comfort but without the burden of any webserver. Powered by the Jamstack-architecture.

# Roadmap
- [ ] Allow customers to sign-in
- [ ] Add shopping-cart
- [ ] Accept payments per Stripe
  * See [Netlify Guide on Stripe integration using Jamstack-architecture](https://www.netlify.com/blog/2020/04/13/learn-how-to-accept-money-on-jamstack-sites-in-38-minutes/) and [Stripe Payments docs](https://stripe.com/docs/payments/accept-a-payment#web)
---

# Architecture
* Static Site: powered by *Gatsby*
* CMS editing functionality: *Netlify CMS* (Open Source :thumbsup:)
    * CMS-Authentication on Github via *Netlify Identity*
* Shopping backend-code: *Netlify Functions*
* Delivery: *Netlify*

# Setup
* This project was bootstrapped by a Gatsby blog-starter: `gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog`
